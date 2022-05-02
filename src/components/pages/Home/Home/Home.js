import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Dashboard from '../Dashboard/Dashboard';
import HomeProducts from '../HomeProducts/HomeProducts';
import ReportBug from '../ReportBug/ReportBug';

const Home = () => {
    return (
        <div className='p-3'>
            <Helmet>
                <title>Home - EasyInventory</title>
            </Helmet>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Dashboard></Dashboard>
            <ReportBug></ReportBug>
        </div>
    );
};

export default Home;