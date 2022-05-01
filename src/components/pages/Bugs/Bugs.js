import React, { useEffect, useState } from 'react';
import Bug from './Bug/Bug';

const Bugs = () => {
    const [bugs, setBugs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bugs')
            .then(res => res.json())
            .then(data => setBugs(data));
    }, [])
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-5'>
                {
                    bugs.map(bug => <Bug key={bug._id} bug={bug}></Bug>)
                }
            </div>
        </div>
    );
};

export default Bugs;