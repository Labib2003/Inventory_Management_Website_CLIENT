import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import HomeProduct from '../HomeProduct/HomeProduct';

const HomeProducts = () => {
    const [products] = useProducts();
    const firstSixProducts = products.slice(0, 6);
    return (
        <div className='container mx-auto grid grid-cols-2 gap-5'>
            {
                firstSixProducts.map(product => <HomeProduct
                    key={product._id}
                    product={product}
                ></HomeProduct>)
            }
        </div>
    );
};

export default HomeProducts;