import React from 'react';
import useProducts from '../../../hooks/useProducts';

const ManageInvntory = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = (id) => {
        const url = `http://localhost:5000/products/${id}`;
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
                            <td
                                onClick={() => handleDelete(product._id)}
                                className='border border-black p-1 font-semibold text-red-500 hover:text-red-600 cursor-pointer'
                            >Delete This Product</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageInvntory;