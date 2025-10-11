import { z } from 'zod';

export const CompanyScalarFieldEnumSchema = z.enum(['id','name','registrationNumber','email','phone','website','logo','address','industryType','annualRevenue','employeeCount','businessType','primaryContactName','primaryContactRole','primaryContactEmail','primaryContactPhone','secondaryContactName','secondaryContactRole','secondaryContactEmail','secondaryContactPhone','log_inst','is_active','createdDate','updatedDate','createdBy']);

export default CompanyScalarFieldEnumSchema;
