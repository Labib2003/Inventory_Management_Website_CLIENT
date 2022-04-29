import React from 'react';

const HomeProduct = ({ product }) => {
    const { name, image, description, price, quantity, supplier } = product;
    return (
        <div className='text-left shadow-md shadow-blue-400 p-5 rounded-md'>
            <div className='flex justify-between mb-5'>
                <img className='w-1/3 mr-5 rounded-md' src={image}></img>
                <div className='my-auto'>
                    <h3 className='text-3xl font-semibold mb-5'>{name}</h3>
                    <div className='flex text-base'>
                        <small className='mr-3'>Price: <span className='font-semibold'>${price}</span></small>
                        <small className='mr-3'>Quantity: <span className='font-semibold'>{quantity}</span></small>
                        <small>Supplier: <span className='font-semibold'>{supplier}</span></small>
                    </div>
                </div>
            </div>
            <p className='text-xl leading-relaxed mb-5'>{description}</p>
            <button className='text-xl text-white font-semibold bg-blue-400 rounded-md px-3 py-1 hover:bg-blue-500'>Update</button>
        </div>
    );
};

export default HomeProduct;