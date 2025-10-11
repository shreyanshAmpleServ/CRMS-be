import { z } from 'zod';

export const DealHistoryScalarFieldEnumSchema = z.enum(['id','dealId','oldStage','newStage','changedAt']);

export default DealHistoryScalarFieldEnumSchema;
