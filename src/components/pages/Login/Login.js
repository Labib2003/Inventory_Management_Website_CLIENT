import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    if (user) {
        navigate(from, { replace: true });
    };

    const handleSignInWithEmailAndPass = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    const handlePasswordReset = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
        toast('Password Reset Email Sent!');

    }

    return (
        <div className='container mx-auto'>
            <div className='w-1/2 mx-auto'>
                <h3 className='text-3xl font-semibold mb-5 text-left'>Please Login</h3>
                <form
                    className='flex flex-col text-xl'
                    onSubmit={handleSignInWithEmailAndPass}
                >
                    <input
                        className='p-3 mb-3 rounded-md'
                        type='email'
                        placeholder='Email'
                        ref={emailRef}
                        required
                    ></input>
                    <input
                        className='p-3 mb-3 rounded-md'
                        type='password'
                        placeholder='Password'
                        ref={passwordRef}
                        required
                    ></input>
                    <p
                        className='mb-3'>New manager? Please
                        <Link
                            to='/register'
                            className='text-blue-400 hover:text-blue-500'
                        >Register</Link>.
                    </p>
                    <p className='text-red-500 font-semibold mb-3'>
                        {(error || googleError) ? `${error ? error?.message : ''} ${googleError ? googleError?.message : ''}` : ''}
                    </p>
                    <input
                        className='w-2/3 mx-auto text-white bg-blue-400 hover:bg-blue-500 rounded-md px-3 py-1 mb-3'
                        type='submit'
                        value='Login'
                    ></input>
                    <p className='mb-3'>
                        Forgot Password? <span className='font-semibold text-red-400 hover:text-red-500 cursor-pointer' onClick={handlePasswordReset}>Send Password Reset Email.</span>
                    </p>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='w-2/3 mx-auto text-white bg-blue-400 hover:bg-blue-500 rounded-md px-3 py-1'>Continue With Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;