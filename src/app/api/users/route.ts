import { NextRequest } from 'next/server';
import { db } from '../../../db';
import { createUserValidationSchema } from '../../../utils';
import { CreateUserModel } from '../../../types';
import { usersTable } from '../../../db/schema';
import createHttpError from 'http-errors';

export const GET = async () => {
  const users = await db.query.usersTable.findMany();

  return Response.json(users);
};

export const POST = async (request: NextRequest) => {
  try {
    const { body = {} } = await request.json();

    const createUser: CreateUserModel = {
      name: body?.name,
      email: body?.email,
      age: body?.age,
      password: body?.password,
    };

    createUserValidationSchema.parse(createUser, {
      async: true,
    });

    const user = await db.insert(usersTable).values(createUser);
    return Response.json(user);
  } catch {
    return Response.json(createHttpError(401, 'bar'));
  }
};

export const PATCH = async () => {
  const users = await db.query.usersTable.findMany();

  return Response.json(users);
};

export const DELETE = async () => {
  const users = await db.query.usersTable.findMany();

  return Response.json(users);
};
