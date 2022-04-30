import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Home/Product/Product';

const AllProducts = () => {
    const [products] = useProducts();
    return (
        <div className='container mx-auto'>
            <h3 className='text-3xl font-semibold my-5'>All products</h3>
            <div className='grid grid-cols-2 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;