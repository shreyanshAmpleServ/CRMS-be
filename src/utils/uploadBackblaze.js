const B2 = require('backblaze-b2');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const axios = require('axios');

const testDirectAuth = async () => {
  const credentials = Buffer.from(`${process.env.BACKBLAZE_B2_KEY_ID}:${process.env.BACKBLAZE_B2_APPLICATION_KEY}`).toString('base64');

  try {
    const res = await axios.get('https://api.backblazeb2.com/b2api/v2/b2_authorize_account', {
      headers: {
        Authorization: `Basic ${credentials}`
      }
    });
  } catch (err) {
    console.error("❌ Auth failed directly:", err.message);
  }
};


const b2 = new B2({
  applicationKeyId: process.env.BACKBLAZE_B2_KEY_ID,
  applicationKey: process.env.BACKBLAZE_B2_APPLICATION_KEY,
});
const sanitizeName = (str) => str.replace(/\s+/g, '_'); // Replace spaces with underscores

// testDirectAuth();
const uploadToBackblaze = async (fileBuffer, originalName, mimeType,folder="general",name) => {
  await b2.authorize();

  // console.log("file name : ",originalName,mimeType)
  const bucketName = process.env.BACKBLAZE_B2_BUCKET_NAME;
  const { data: buckets } = await b2.listBuckets();
  const bucket = buckets.buckets.find(b => b.bucketName === bucketName);
  if (!bucket) throw new Error('Bucket not found');
const uniqueId = Date.now();
  const ext = path.extname(originalName);
  const fileName = `${folder.toLowerCase()}/${sanitizeName(name).toLowerCase()}_${uniqueId}_${originalName}`;
  // const fileName = `${folder}/${name}/${uuidv4()}${ext}`;
  
  const { data: uploadData } = await b2.getUploadUrl({ bucketId: bucket.bucketId });
 

  await b2.uploadFile({
    uploadUrl: uploadData.uploadUrl,
    uploadAuthToken: uploadData.authorizationToken,
    fileName,
    data: fileBuffer,
    mime: mimeType,
  });

  const fileUrl = `https://DCC-CRMS.s3.us-east-005.backblazeb2.com/${fileName}`;
  return fileUrl;
};


const deleteFromBackblaze = async (fileUrl) => {
  try {
    // 1. Extract file name from URL
    const url = new URL(fileUrl);
    const fileName = decodeURIComponent(url.pathname.replace(/^\/+/, '')); // remove leading slash

    // 2. Authorize with B2
    await b2.authorize();

    // 3. Get bucket
    const { data: buckets } = await b2.listBuckets();
    const bucket = buckets.buckets.find(
      (b) => b.bucketName === process.env.BACKBLAZE_B2_BUCKET_NAME
    );
    if (!bucket) throw new Error('Bucket not found');

    // 4. Search for file version with matching name
    let matchedFile = null;
    let startFileName = undefined;

    do {
      const { data: fileVersions } = await b2.listFileVersions({
        bucketId: bucket.bucketId,
        prefix: fileName,
        maxFileCount: 1000,
        startFileName
      });

      matchedFile = fileVersions.files.find((f) => f.fileName === fileName);

      if (matchedFile) break;

      startFileName = fileVersions.nextFileName;
    } while (startFileName);

    if (!matchedFile) {
      console.error(`❌ File not found in B2: ${fileName}`);
      throw new Error(`File not found in bucket`);
    }

    // 5. Delete the file
    await b2.deleteFileVersion({
      fileName: matchedFile.fileName,
      fileId: matchedFile.fileId
    });

    return true;
  } catch (err) {
    console.error('❌ Failed to delete from B2:', err.message);
    throw err;
  }
};

module.exports = {uploadToBackblaze , deleteFromBackblaze};