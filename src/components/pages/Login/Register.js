import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container mx-auto'>
            <div className='w-1/2 mx-auto'>
                <h3 className='text-3xl font-semibold mb-5 text-left'>Please Register</h3>
                <form className='flex flex-col text-xl'>
                    <input className='p-3 mb-3 rounded-md' type='text' placeholder='Name' required></input>
                    <input className='p-3 mb-3 rounded-md' type='email' placeholder='Email' required></input>
                    <input className='p-3 mb-3 rounded-md' type='password' placeholder='Password' required></input>
                    <p className='mb-3'>Already have an account? <Link to='/login' className='text-blue-400'>Login</Link>.</p>
                    <input className='w-2/3 mx-auto text-white bg-blue-400 hover:bg-blue-500 rounded-md px-3 py-1 mb-3' type='submit' value='Register' />
                </form>
            </div>
        </div>
    );
};

export default Register;