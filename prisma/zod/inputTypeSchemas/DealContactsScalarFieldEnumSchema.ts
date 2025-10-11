import { z } from 'zod';

export const DealContactsScalarFieldEnumSchema = z.enum(['id','dealId','contactId','roleInDeal','createdDate']);

export default DealContactsScalarFieldEnumSchema;
