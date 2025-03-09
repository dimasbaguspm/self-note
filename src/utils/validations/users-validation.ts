import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from 'drizzle-zod';
import { usersTable } from '../../db/schema';

export const selectUserValidationSchema = createSelectSchema(usersTable);
export const createUserValidationSchema = createInsertSchema(usersTable);
export const updateUserValidationSchema = createUpdateSchema(usersTable);
