import React from 'react';

const Blog = ({ blog }) => {
    const { title, body } = blog;
    return (
        <div className='text-left mb-5'>
            <h3 className='text-3xl text-gray-900 font-semibold mb-3'>{title}</h3>
            <p className='text-xl text-gray-800 leading-relaxed'>{body}</p>
        </div>
    );
};

export default Blog;