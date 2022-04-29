import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-around container mx-auto mb-5'>
            <div className='w-1/2 text-left my-auto'>
                <h1 className='text-5xl font-semibold mb-5'>Welcome to Crick-Freak warehouse</h1>
                <p className='text-xl leading-relaxed'>Here you can manager your inventory by shipping/adding products to your collection.</p>
            </div>
            <img className='w-2/6 my-auto' src='banner4a10.png'></img>
        </div>
    );
};

export default Banner;