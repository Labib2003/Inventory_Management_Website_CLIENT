import React from 'react';

const ReportIssue = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;
    return (
        <div className='container mx-auto'>
            <div className='flex justify-around'>
                <img className='w-1/3' src='technical-diff.svg'></img>
                <div className='my-auto'>
                    <p className='text-xl font-semibold mb-3'>Having an issue? Report it and we will fix it ASAP!</p>
                    <form className='flex flex-col'>
                        <input className='p-3 mb-3 rounded-md bg-blue-100' type='text' placeholder='Title' required></input>
                        <textarea className='p-3 mb-3 rounded-md bg-blue-100' type='text' placeholder='Description' required></textarea>
                        <div className='flex justify-between'>
                            <input className='text-white bg-blue-400 hover:bg-blue-500 rounded-md px-3 py-1 mb-3 cursor-pointer' type='submit' value='Report Issue'></input>
                            <button className='text-white bg-blue-400 hover:bg-blue-500 rounded-md px-3 py-1 mb-3' >Previous Issues</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReportIssue;