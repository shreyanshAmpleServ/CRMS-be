import { z } from 'zod';

/////////////////////////////////////////
// COMPANY SCHEMA
/////////////////////////////////////////

export const CompanySchema = z.object({
  id: z.number(),
  name: z.string(),
  registrationNumber: z.string().nullish(),
  email: z.string(),
  phone: z.string(),
  website: z.string().nullish(),
  logo: z.string().nullish(),
  address: z.string().nullish(),
  industryType: z.string(),
  annualRevenue: z.number().nullish(),
  employeeCount: z.number().nullish(),
  businessType: z.string(),
  primaryContactName: z.string(),
  primaryContactRole: z.string(),
  primaryContactEmail: z.string(),
  primaryContactPhone: z.string(),
  secondaryContactName: z.string().nullish(),
  secondaryContactRole: z.string().nullish(),
  secondaryContactEmail: z.string().nullish(),
  secondaryContactPhone: z.string().nullish(),
  log_inst: z.number(),
  is_active: z.string(),
  createdDate: z.coerce.date(),
  updatedDate: z.coerce.date().nullish(),
  createdBy: z.number(),
})

export type Company = z.infer<typeof CompanySchema>

export default CompanySchema;
