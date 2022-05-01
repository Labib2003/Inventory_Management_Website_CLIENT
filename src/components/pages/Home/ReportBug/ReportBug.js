import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';

const ReportBug = () => {
    const titleRef = useRef('');
    const descriptionRef = useRef('');

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;

    const [user, loading, error] = useAuthState(auth);

    const handleReportBug = (event) => {
        event.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        if (user) {
            fetch('https://floating-retreat-93986.herokuapp.com/bugs', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    user: user.email,
                    time: dateTime,
                    description: description
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    // clearing the form
                    titleRef.current.value = '';
                    descriptionRef.current.value = ''
                    toast.success('Bug report sent! Thanks for your input.');
                });
        }
        else{
            toast.error('Please login to report a bug.')
        }
    }

    return (
        <div className='container mx-auto'>
            <div className='flex justify-around'>
                <img className='hidden md:block w-1/4' src='technical-diff.svg'></img>
                <div className='my-auto'>
                    <p className='text-xl text-gray-800 font-semibold mb-3'>Having an issue? Report it and we will fix it ASAP!</p>
                    <form onSubmit={handleReportBug} className='flex flex-col'>
                        <input
                            className='p-3 mb-3 rounded-md bg-blue-100' type='text'
                            placeholder='Title'
                            ref={titleRef}
                            required></input>
                        <textarea
                            className='p-3 mb-3 rounded-md bg-blue-100' type='text'
                            placeholder='Description'
                            ref={descriptionRef}
                            required></textarea>
                        <div className='flex justify-between'>
                            <input
                                className='text-white bg-blue-500 hover:bg-blue-400 rounded-md px-3 py-1 mb-3 cursor-pointer' type='submit'
                                value='Report Issue'></input>
                            <Link to='/bugs' className='text-white bg-blue-500 hover:bg-blue-400 rounded-md px-3 py-1 mb-3' >Previous Issues</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReportBug;