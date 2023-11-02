'use server';

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

const createComment = async (prevState, formValues) => {
  try {
    const result =
    await sql`INSERT INTO Comments (Name, Content, CreatedAt) VALUES (
      ${formValues.get('name')}, 
      ${formValues.get('content')}, 
      ${JSON.stringify(new Date())});`;
    revalidatePath('/');
    return 'Success';
  } catch (error) {
    return `Failed ${JSON.stringify(error)}`
  }
};

async function deleteComment(prevState, formData ) {
  try {
    await sql`
      DELETE FROM Comments
      WHERE id = ${formData.get('id')};
    `

    revalidatePath('/')
    return { message: `Deleted Comments ${formData.get('id')}` }
  } catch (e) {
    return { message: 'Failed to delete Comment' }
  }
}


export {createComment, deleteComment};