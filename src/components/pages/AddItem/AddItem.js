import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../../firebase.init';

const AddItem = () => {
    const nameRef = useRef('');
    const imageUrlRef = useRef('');
    const descriptionRef = useRef('');
    const supplierRef = useRef('');
    const priceRef = useRef(0);
    const quantityRef = useRef(0);

    const [user, loading, error] = useAuthState(auth);

    const handleAddNewItem = (event) => {
        event.preventDefault();
        fetch('https://floating-retreat-93986.herokuapp.com/products', {
            method: 'POST',
            body: JSON.stringify({
                name: nameRef.current.value,
                user: user.email,
                image: imageUrlRef.current.value,
                description: descriptionRef.current.value,
                price: priceRef.current.value,
                quantity: quantityRef.current.value,
                supplier: supplierRef.current.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                // clearing the form
                nameRef.current.value = '';
                imageUrlRef.current.value = '';
                descriptionRef.current.value = '';
                priceRef.current.value = 0;
                quantityRef.current.value = 0;
                supplierRef.current.value = '';
                toast.success("Item succesfully added!");
            });
    }

    return (
        <div className='container mx-auto p-3'>
            <h3 className='text-3xl text-gray-900 font-semibold my-5'>Fill in this form to add a new item.</h3>
            <form onSubmit={handleAddNewItem} className='flex flex-col text-xl w-full md:w-1/2 mx-auto'>
                <input
                    className='bg-blue-100 rounded-md px-3 py-1 mb-3 text-black'
                    type='email'
                    placeholder='Email'
                    value={user.email}
                    readOnly
                    required
                ></input>
                <input
                    className='bg-blue-100 rounded-md px-3 py-1 mb-3 text-black'
                    type='text'
                    placeholder='Item Name'
                    ref={nameRef}
                    required
                ></input>
                <input
                    className='bg-blue-100 rounded-md px-3 py-1 mb-3 text-black'
                    type='text'
                    placeholder='Image URL'
                    ref={imageUrlRef}
                    required
                ></input>
                <textarea
                    className='bg-blue-100 rounded-md px-3 py-1 mb-3 text-black'
                    type='text'
                    placeholder='Description'
                    ref={descriptionRef}
                    required
                ></textarea>
                <input
                    className='bg-blue-100 rounded-md px-3 py-1 mb-3 text-black'
                    type='text'
                    placeholder='Supplier'
                    ref={supplierRef}
                    required
                ></input>
                <div className='flex justify-between w-full'>
                    <input
                        className='w-1/2 bg-blue-100 rounded-md px-3 py-1 mb-3 text-black'
                        type='number'
                        min='0'
                        placeholder='Price'
                        ref={priceRef}
                        required
                    ></input>
                    <input
                        className='w-1/2 bg-blue-100 rounded-md px-3 py-1 mb-3 text-black'
                        type='number'
                        min='0'
                        placeholder='Quantity'
                        ref={quantityRef}
                        required
                    ></input>
                </div>
                <input className='text-xl text-white font-semibold bg-blue-400 rounded-md px-3 py-1 hover:bg-blue-500' type='submit' value='Add Item'></input>
            </form>
        </div>
    );
};

export default AddItem;