import PhotosCard from '@/components/PhotosCard';
import { Button, Card, Chip, CloseButton, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoHeart } from 'react-icons/io5';
import { PiDownloadSimpleLight } from 'react-icons/pi';

const PhotosDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://pixgen-ai-kappa.vercel.app/data.json')
    const data = await res.json()
    const photo = data.find(p => p.id == id)
    return (
        <div className='w-11/12 mx-auto mt-10 flex gap-5'>


            <div className=''>
                <Image
                    className='rounded-xl '
                    width={300}
                    height={100}

                    src={photo.imageUrl}
                    alt='title' />
            </div>

            <div>
                <h2 className='font-medium text-2xl my-3'>{photo.title}</h2>
                <p>{photo.prompt}</p>
                <p>{photo.resolution}</p>
                <p>{photo.category}</p>
                <p>{photo.model}</p>
               

            </div>
        </div>
    );
};

export default PhotosDetailsPage;