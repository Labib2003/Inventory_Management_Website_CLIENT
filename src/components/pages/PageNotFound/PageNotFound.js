import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='container mx-auto'>
            <div class="px-40 py-20 bg-white rounded-md shadow-xl">
                <div class="flex flex-col items-center">
                    <h1 class="font-bold text-blue-500 text-5xl">404</h1>

                    <h6 class="mb-2 text-xl font-bold text-center text-gray-800 md:text-xl">
                        <span class="text-red-500">Oops!</span> Page not found
                    </h6>
                    <p class="text-center text-gray-500 md:text-lg">
                        The page you're looking for doesn't exist.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;