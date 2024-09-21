'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { createDocument } from '@/lib/actions/rooms.action';
import { useRouter } from 'next/navigation';

interface AddDocumentBtnProps {
  userId: string;
  email: string;
}

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();

  const AddDocumenthandler = async () => {
    try {
      const room = await createDocument({ userId, email });
      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      type='submit'
      onClick={AddDocumenthandler}
      className='gradient-blue flex gap-1 shadow-md'
    >
      <Image
        src='/assets/icons/add.svg'
        alt='addbtn'
        width={24}
        height={24}
      />
      <p className='hidden sm:block'>Start a blank document</p>
    </Button>
  );
};

export default AddDocumentBtn;
