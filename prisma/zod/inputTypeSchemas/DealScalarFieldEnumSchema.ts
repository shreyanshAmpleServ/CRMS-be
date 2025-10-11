import { z } from 'zod';

export const DealScalarFieldEnumSchema = z.enum(['id','dealName','status','dealValue','currency_id','country_id','period','periodValue','dueDate','expectedCloseDate','followUpDate','assigneeId','source','priority','tags','description','is_active','createdDate','updatedDate','createdBy','updatedBy','logInst','pipelineId','stageId']);

export default DealScalarFieldEnumSchema;
