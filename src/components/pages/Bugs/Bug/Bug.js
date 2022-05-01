import React from 'react';

const Bug = ({ bug }) => {
    const { title, user, time, description } = bug;
    return (
        <div className='text-left mb-5 shadow shadow-blue-400 rounded-md p-3'>
            <h3 className='text-3xl font-semibold mb-3'>{title}</h3>
            <small className='mb-3'>Reported by: <span className='font-semibold'>{user}</span></small>
            <br></br>
            <small className='mb-3'>Reported at: <span className='font-semibold'>{time}</span></small>
            <p className='text-xl leading-relaxed'>{description}</p>
        </div>
    );
};

export default Bug;