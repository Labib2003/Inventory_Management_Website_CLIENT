import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container mx-auto'>
            <div className='w-1/2 mx-auto'>
                <h3 className='text-3xl font-semibold mb-5 text-left'>Please Login</h3>
                <form className='flex flex-col text-xl'>
                    <input className='p-3 mb-3 rounded-md' type='email' placeholder='Email' required></input>
                    <input className='p-3 mb-3 rounded-md' type='password' placeholder='Password' required></input>
                    <p className='mb-3'>New manager? Please <Link to='/register' className='text-blue-400'>Register</Link>.</p>
                    <input className='w-2/3 mx-auto text-white bg-blue-400 hover:bg-blue-500 rounded-md px-3 py-1 mb-3' type='submit' value='Login' />
                    <button className='w-2/3 mx-auto text-white bg-blue-400 hover:bg-blue-500 rounded-md px-3 py-1'>Continue With Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;