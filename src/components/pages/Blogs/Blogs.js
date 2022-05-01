import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://floating-retreat-93986.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className='container mx-auto p-3'>
            {
                blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;