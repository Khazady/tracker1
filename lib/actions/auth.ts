'use server';

import { getUser } from '@/lib/data/user';
import { createUser } from '@/lib/schemes/user.scheme';
import { hashPassword } from '@/lib/utils';
import { signIn } from 'auth';
import { AuthError } from 'next-auth';
import prisma from '../db';

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: null | string;
};

export async function register(prevState: State, formData: FormData) {
  try {
    const validatedFields = createUser.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Invalid data. Failed to Create User.',
      };
    }
    const { email, password } = validatedFields.data;
    const existingUser = await getUser(email);
    if (existingUser) {
      return { message: 'User already exists.' };
    }
    const hashedPassword = await hashPassword(password);

    const newUser = {
      email,
      password: hashedPassword,
    };

    await prisma.users.create({ data: newUser });

    return { message: 'Created User!' };
  } catch (error) {
    return { message: 'Database Error: Failed to Create User.' };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
    return 'Logged In User!';
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
