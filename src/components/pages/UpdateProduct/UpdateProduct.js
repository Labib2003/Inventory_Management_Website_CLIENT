import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { name, image, description, price, quantity, supplier } = product;
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div className='container mx-auto flex h-1/2'>
            <img className='w-1/3 mr-10' src={image}></img>
            <div className='text-left my-auto'>
                <h3 className='text-3xl font-semibold mb-5'>{name}</h3>
                <p className='text-xl mb-3'>{description}</p>
                <div className='flex mb-3'>
                    <p className='mr-3'>Price: <span className='font-semibold'>${price}</span></p>
                    <p>Supplier: <span className='font-semibold'>{supplier}</span></p>
                </div>
                <div className='flex'>
                    <p className='mr-3 my-auto'>Quantity: <span className='font-semibold'>{quantity}</span></p>
                    <button className='text-xl text-white font-semibold bg-blue-400 rounded-md px-3 py-1 hover:bg-blue-500'>Delevered</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;