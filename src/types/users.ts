import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { usersTable } from '../db/schema';

export type UserModel = InferSelectModel<typeof usersTable>;
export type CreateUserModel = InferInsertModel<typeof usersTable>;
export type UpdateUserModel = Partial<CreateUserModel>;
