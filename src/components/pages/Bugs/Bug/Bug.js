import React from 'react';

const Bug = ({ bug }) => {
    const { title, user, time, description } = bug;
    return (
        <div className='text-left mb-5 shadow shadow-blue-400 rounded-md p-3'>
            <h3 className='text-3xl text-gray-900 font-semibold mb-3'>{title}</h3>
            <small className='mb-3 text-gray-700'>Reported by: <span className='font-semibold font-mono'>{user}</span></small>
            <br></br>
            <small className='mb-3 text-gray-700'>Reported at: <span className='font-semibold font-mono'>{time}</span></small>
            <p className='text-xl text-gray-800 leading-relaxed'>{description}</p>
        </div>
    );
};

export default Bug;