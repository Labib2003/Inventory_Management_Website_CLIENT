import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='bg-blue-500 mt-10'>
            <p>&copy; {currentYear}</p>
        </div>
    );
};

export default Footer;