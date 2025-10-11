import { z } from 'zod';

/////////////////////////////////////////
// CRMS MENUS SCHEMA
/////////////////////////////////////////

export const crms_menusSchema = z.object({
  id: z.number(),
  menu_label: z.string().nullish(),
  routes: z.string().nullish(),
  icon: z.string().nullish(),
  parent_menu_id: z.number().nullish(),
  is_active: z.string(),
  order_by: z.number().nullish(),
})

export type crms_menus = z.infer<typeof crms_menusSchema>

export default crms_menusSchema;
