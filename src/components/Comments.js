import React from 'react';
import { Comment } from './Comment';
import { sql } from '@vercel/postgres';
import DeleteComment from './DeleteComment';

export const Comments = async () => {
  const data = await sql`SELECT * FROM comments`;
  const { rows: comments } = data;

  console.log('ccc',comments.length)


  return (
    <div className='p-6 bg-white rounded shadow mb-3'>
      <p className='font-bold mb-3'>Comments</p>

      <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment
            key={comment.id}
            comment={comment}
          />
          <DeleteComment id={comment.id} todo={comment.name} />
        </li>        
      ))}
      </ul>
    </div>
  );
};
