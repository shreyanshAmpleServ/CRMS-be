import { z } from 'zod';

export const CountryScalarFieldEnumSchema = z.enum(['id','code','name','is_active','createdate','createdby','log_inst','updatedate','updatedby']);

export default CountryScalarFieldEnumSchema;
