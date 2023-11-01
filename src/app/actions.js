'use server';

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const createComment = async (prevState, formValues) => {
  try {
    const result =
    await sql`INSERT INTO Comments (Id, Name, Content, CreatedAt) VALUES (
      ${Math.floor(Math.random() * 10001)},
      ${formValues.get('name')}, 
      ${formValues.get('content')}, 
      ${JSON.stringify(new Date())});`;
    revalidatePath('/');
    return 'Success';
  } catch (error) {
    return `Failed ${JSON.stringify(error)}`
  }
};