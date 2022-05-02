import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='w-full bg-blue-500 mt-10 p-10 font-semibold text-white'>
            <p>&copy; {currentYear} Labib Amir Salimi</p>
        </div>
    );
};

export default Footer;