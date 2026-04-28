import PhotosCard from '@/components/PhotosCard';
import React from 'react';

const AllPhotos = async () => {
    const res = await fetch('https://pixgen-ai-kappa.vercel.app/data.json');
    const photos = await res.json();
    return (
        <div>
            <h1 className='flex justify-center font-bold my-5 text-2xl'>All Photos</h1>;
            <div className='grid grid-cols-4 gap-6'>
                {
                    photos.map(photo => <PhotosCard key={photo.id} photo={photo} />)
                }
            </div>
        </div>
    );
};

export default AllPhotos;