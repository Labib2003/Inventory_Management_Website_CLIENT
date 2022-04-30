import React, { useState } from 'react';
import useProducts from '../../../../hooks/useProducts';
import Product from '../Product/Product';

const HomeProducts = () => {
    const [products] = useProducts();
    const firstSixProducts = products.slice(0, 6);

    return (
        <div className='container mx-auto mb-10'>
            <h3 className='text-3xl font-semibold mb-5'>Inventory (Total items: {products.length})</h3>
            <div className='grid grid-cols-2 gap-5'>
                {
                    firstSixProducts.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default HomeProducts;