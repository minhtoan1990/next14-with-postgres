'use client';
import dayjs from 'dayjs';
import React from 'react';

export const Comment = (drops) => {
  const { id, name, content, createdAt } = drops.comment;

  return (
    <div className='border py-1 px-2 rounded mb-1'>
      <p className='font-bold text-sm'>
        {id} - {name}{' '}
        <span className='text-[#cdcdcd] italic text-xs ml-3'>
          {dayjs(createdAt).format('DD/MM/YYYY HH:mm:ss')}
        </span>
      </p>
      <p className='text-sm'>{content}</p>
    </div>
  );
};
