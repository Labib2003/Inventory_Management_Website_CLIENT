import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(
        auth
    );

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleCreateUserWithEmailAndPassword = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        await sendEmailVerification();
        toast('Check your inbox to verify your email.');
    };

    if (user) {
        navigate('/home');
    }

    return (
        <div className='container mx-auto'>
            <div className='w-1/2 mx-auto'>
                <h3 className='text-3xl font-semibold mb-5 text-left'>Please Register</h3>
                <form
                    onSubmit={handleCreateUserWithEmailAndPassword}
                    className='flex flex-col text-xl'
                >
                    <input
                        className='p-3 mb-3 rounded-md bg-blue-100'
                        type='text'
                        placeholder='Name'
                        ref={nameRef}
                        required
                    ></input>
                    <input
                        className='p-3 mb-3 rounded-md bg-blue-100'
                        type='email'
                        placeholder='Email'
                        ref={emailRef}
                        required
                    ></input>
                    <input
                        className='p-3 mb-3 rounded-md bg-blue-100'
                        type='password'
                        placeholder='Password'
                        ref={passwordRef}
                        required
                    ></input>
                    <p
                        className='mb-3'>Already have an account?&nbsp;
                        <Link
                            to='/login'
                            className='text-blue-400'
                        >Login</Link>.
                    </p>
                    <input
                        className='w-2/3 mx-auto text-white bg-blue-400 hover:bg-blue-500 rounded-md px-3 py-1 mb-3'
                        type='submit'
                        value='Register'
                    ></input>
                </form>
            </div>
        </div>
    );
};

export default Register;