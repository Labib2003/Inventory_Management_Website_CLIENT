import React from 'react';

const HomeProduct = ({ product }) => {
    const { name, image, description, price, quantity, supplier } = product;
    return (
        <div className='text-left border border-blue-400 p-5 rounded-md'>
            <div className='flex h-1/2 overflow-hidden justify-around mb-5'>
                <img className='w-1/3 mr-5' src={image}></img>
                <div className='my-auto'>
                    <h3 className='text-2xl font-semibold'>{name}</h3>
                    <div className='flex text-base'>
                        <small className='mr-5'>Price: ${price}</small>
                        <small className='mr-5'>Quantity: {quantity}</small>
                        <small>Supplier: {supplier}</small>
                    </div>
                </div>
            </div>
            <p className='text-xl leading-relaxed'>{description}</p>
        </div>
    );
};

export default HomeProduct;