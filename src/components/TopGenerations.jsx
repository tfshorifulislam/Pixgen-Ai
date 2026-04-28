import Image from 'next/image';
import React from 'react';
import PhotosCard from './PhotosCard';

const TopGenerations = async () => {
    const res = await fetch('https://pixgen-ai-kappa.vercel.app/data.json')
    const data = await res.json()
    const photos = data.slice(0, 8)
    console.log(data);
    console.log(photos)
    return (
        <div>
            <h1 className='flex justify-center font-bold my-5 text-2xl'>Top Generations</h1>
            <div className='grid grid-cols-4 gap-6'>
                {
                    photos.map(photo => <PhotosCard key={photo.id} photo={photo} />)
                }
            </div>
        </div>
    );
};

export default TopGenerations;