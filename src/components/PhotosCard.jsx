import { Button, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { IoHeart } from 'react-icons/io5';
import { PiDownloadSimpleLight } from 'react-icons/pi';

const PhotosCard = ({ photo }) => {
    return (
        <div className='rounded-xl p-5 shadow-sm border'>

            <div className='relative w-full aspect-square'>
                <Image
                    className='rounded-xl object-cover'
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    src={photo.imageUrl}
                    alt='title' />
                    <Chip size='sm' className='absolute right-2 top-2'>{photo.category}</Chip>
            </div>

            <div className='font-medium text-2xl my-3'>
                <h2>{photo.title}</h2>
            </div>
            <div className='flex gap-4 my-5'>
                <div className='flex items-center gap-1'>
                    <IoHeart />
                    <p>{photo.likes}</p>
                </div>
                <Separator orientation='vertical' />
                <div className='flex items-center gap-1'>
                    <PiDownloadSimpleLight />
                    <p>{photo.downloads}</p>
                </div>
            </div>
            <Button className='w-full' variant='outline'>View</Button>
        </div>
    );
};

export default PhotosCard;