import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);

    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        const email = user.email
        fetch(`https://floating-retreat-93986.herokuapp.com/myItems?email=${email}`, {
            method: "GET",
            headers: {
                'authorization': `${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((json) => setMyItems(json))
    }, [user]);

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
                    const remaining = myItems.filter(service => service._id !== id);
                    setMyItems(remaining);
                });
        };
    };

    return (
        <div className='container mx-auto p-3'>
            <h3 className='text-3xl font-semibold my-5'>Items Added By: {user.email}</h3>
            <table className='w-full text-left text-xl mb-5'>
                <thead>
                    <tr>
                        <th className='border border-gray-900 text-gray-900 p-1'>Name</th>
                        <th className='border border-gray-900 text-gray-900 p-1'>Quantity</th>
                        <th className='border border-gray-900 text-gray-900 p-1'>X</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myItems.map(product => <tr key={product._id}>
                            <td className='border border-gray-900 text-gray-800 p-1'>{product.name}</td>
                            <td className='border border-gray-900 text-gray-800 p-1'>{product.quantity}</td>
                            <td
                                onClick={() => handleDelete(product._id)}
                                className='border border-gray-900 p-1 font-semibold text-red-500 hover:text-red-600 cursor-pointer'
                            >Delete This Product</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};
export default MyItems;