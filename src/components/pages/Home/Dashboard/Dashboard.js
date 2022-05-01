import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useProducts from '../../../../hooks/useProducts';

const Dashboard = () => {
    const [products] = useProducts();
    return (
        <div className='container mx-auto mb-10'>
            <h3 className='text-3xl font-semibold mb-5'>Product Stock:</h3>
            <ResponsiveContainer width="95%" height={400}>
                <BarChart className='mx-auto' data={products}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="quantity" fill="#60A5FA" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;