import { z } from 'zod';

export const Crms_d_solutionScalarFieldEnumSchema = z.enum(['id','title','is_active','solution_owner','product_id','status','question','answer','createdate','createdby','updatedate','updatedby','log_inst']);

export default Crms_d_solutionScalarFieldEnumSchema;
