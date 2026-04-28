import React from 'react';

const TopGenerations = async () => {
    const res = await fetch('https://pixgen-ai-kappa.vercel.app/data.json')
    const data = await res.json()
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default TopGenerations;