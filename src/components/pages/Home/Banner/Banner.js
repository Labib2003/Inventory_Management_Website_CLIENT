import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-around container mx-auto mb-5'>
            <div className='w-full md:w-1/2 text-left my-auto'>
                <h1 className='text-5xl text-gray-900 font-semibold mb-5'>Welcome to <span className='text-blue-500'>EasyInventory</span></h1>
                <p className='text-xl text-gray-800 leading-relaxed'>Here you can manage your inventory by shipping/adding products to your collection.</p>
            </div>
            <img className='hidden md:block w-2/6 my-auto' src='banner4a10.png'></img>
        </div>
    );
};

export default Banner;