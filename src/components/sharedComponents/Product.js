import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, image, description, price, quantity, supplier } = product;
    const navigate = useNavigate();

    const navigateToUpdate = (id) => {
        navigate(`/products/${id}`);
    }

    return (
        <div className='text-left shadow-md shadow-blue-400 p-5 rounded-md'>
            <div className='flex flex-col md:flex-row justify-between mb-5'>
                <img className='h-40 w-40 rounded-md mb-3 md:mb-0 mx-auto' src={image}></img>
                <div className='my-auto ml-5'>
                    <h3 className='text-3xl text-gray-900 font-semibold mb-5'>{name}</h3>
                    <div className='flex text-gray-700'>
                        <small className='mr-3'>Price: <span className='font-semibold'>${price}</span></small>
                        <small className='mr-3'>Quantity: <span className='font-semibold'>{quantity}</span></small>
                        <small>Supplier: <span className='font-semibold'>{supplier}</span></small>
                    </div>
                </div>
            </div>
            <p className='text-xl text-gray-800 leading-relaxed mb-5'>{description}</p>
            <button
                onClick={() => navigateToUpdate (_id)}
                className='text-xl text-white font-semibold bg-blue-500 rounded-md px-3 py-1 hover:bg-blue-400'
            >Update Stock</button>
        </div>
    );
};

export default Product;