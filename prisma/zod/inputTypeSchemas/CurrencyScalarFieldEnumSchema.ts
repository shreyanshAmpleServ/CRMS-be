import { z } from 'zod';

export const CurrencyScalarFieldEnumSchema = z.enum(['id','name','code','icon','is_default','is_active','createdate','updatedate','createdby','updatedby','log_inst']);

export default CurrencyScalarFieldEnumSchema;
