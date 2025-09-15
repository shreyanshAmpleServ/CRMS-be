// publicAuthMiddleware.js

const publicAuthenticateToken = async (req, res, next) => {
  try {
    console.log("Header",req.headers)
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "User not Authorized" });
    }

    const token = authHeader.split(" ")[1];

    // ✅ Dynamically import jose
    const { jwtVerify } = await import('jose');
    const secret = new TextEncoder().encode(process.env.PUBLIC_SECRET);

    const { payload } = await jwtVerify(token, secret);

    // Use data from payload
    req.publicPayload = payload;
    req.orderBy= "Desc"
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(403).json({
      message: error.message || "Invalid or expired token"
    });
  }
};

module.exports = { publicAuthenticateToken };
