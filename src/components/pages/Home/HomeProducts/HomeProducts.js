import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import HomeProduct from '../HomeProduct/HomeProduct';

const HomeProducts = () => {
    const [products] = useProducts();
    const firstSixProducts = products.slice(0, 6);
    return (
        <div className='container mx-auto'>
            <h3 className='text-3xl font-semibold mb-5'>Inventory (Total items: {products.length})</h3>
            <div className='grid grid-cols-2 gap-5'>
            {
                firstSixProducts.map(product => <HomeProduct
                    key={product._id}
                    product={product}
                ></HomeProduct>)
            }
        </div>
        </div>
    );
};

export default HomeProducts;