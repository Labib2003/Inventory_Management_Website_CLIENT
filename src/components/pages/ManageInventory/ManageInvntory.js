import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';

const ManageInvntory = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = (id) => {
        const url = `https://floating-retreat-93986.herokuapp.com/products/${id}`;
        const confirm = window.confirm("Are you sure?");
        if (confirm) {
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(service => service._id !== id);
                    setProducts(remaining);
                });
        };
    };

    return (
        <div className='container mx-auto p-3'>
            <table className='w-full text-left text-xl mb-5'>
                <thead>
                    <tr>
                        <th className='border border-gray-900 text-gray-900 p-1'>Name</th>
                        <th className='border border-gray-900 text-gray-900 p-1 hidden md:block'>Added By</th>
                        <th className='border border-gray-900 text-gray-900 p-1'>Quantity</th>
                        <th className='border border-gray-900 text-gray-900 p-1'>X</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr key={product._id}>
                            <td className='border border-gray-900 text-gray-800 p-1'>{product.name}</td>
                            <td className='border border-gray-900 text-gray-800 p-1 hidden md:block'>{product.user}</td>
                            <td className='border border-gray-900 text-gray-800 p-1'>{product.quantity}</td>
                            <td
                                onClick={() => handleDelete(product._id)}
                                className='border border-gray-900 p-1 font-semibold text-red-500 hover:text-red-600 cursor-pointer'
                            >Delete This Product</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <Link className='text-xl text-white font-semibold bg-blue-500 rounded-md px-3 py-1 hover:bg-blue-400 mx-auto' to='/add'>Add New Item</Link>
        </div>
    );
};

export default ManageInvntory;