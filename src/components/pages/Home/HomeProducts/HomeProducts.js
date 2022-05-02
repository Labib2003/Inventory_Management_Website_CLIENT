import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';
import Product from '../../../sharedComponents/Product';

const HomeProducts = () => {
    const [products] = useProducts();
    const firstSixProducts = products.slice(0, 6);

    return (
        <div className='container mx-auto mb-10'>
            <h3 className='text-3xl text-gray-900 font-semibold mb-5'>Inventory (Total items: {products.length})</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5'>
                {
                    firstSixProducts.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <Link
                className='text-xl text-white font-semibold bg-blue-500 rounded-md px-3 py-1 hover:bg-blue-400'
                to='/manage'
            >Manage Inventory</Link>
        </div>
    );
};

export default HomeProducts;