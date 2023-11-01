import React from 'react';
import { Comment } from './Comment';
import { sql } from '@vercel/postgres';

export const Comments = async () => {
  const data = await sql`SELECT * FROM comments`;
  const { rows: comments } = data;

  console.log('ccc',comments.length)
  // if(comments.length) {

  // }

  return (
    <div className='p-6 bg-white rounded shadow mb-3'>
      <p className='font-bold mb-3'>Comments</p>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
};
