import React from 'react';
import useProducts from '../../../hooks/useProducts';

const ManageInvntory = () => {
    const [products] = useProducts();
    return (
        <div className='container mx-auto'>
            <table className='w-full text-left text-xl'>
                <thead>
                    <tr>
                        <th className='border border-black p-1'>Name</th>
                        <th className='border border-black p-1'>Quantity</th>
                        <th className='border border-black p-1'>Total Cost</th>
                        <th className='border border-black p-1'>X</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr key={product._id}>
                            <td className='border border-black p-1'>{product.name}</td>
                            <td className='border border-black p-1'>{product.quantity}</td>
                            <td className='border border-black p-1'>${product.quantity * product.price}</td>
                            <td className='border border-black p-1 font-semibold text-red-500 hover:text-red-600 cursor-pointer'>Delete This Product</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageInvntory;