import { Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { IoHeart } from 'react-icons/io5';
import { PiDownloadSimpleLight } from 'react-icons/pi';

const PhotosCard = ({ photo }) => {
    return (
        <div>
            {
                <Image
                    width={500}
                    height={500}
                    src={photo.imageUrl}
                    alt='title' />
            }
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
        </div>
    );
};

export default PhotosCard;