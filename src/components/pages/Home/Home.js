import React from 'react';
import Banner from './Banner/Banner';
import Dashboard from './Dashboard/Dashboard';
import HomeProducts from './HomeProducts/HomeProducts';
import ReportIssue from './ReportIssue/ReportIssue';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Dashboard></Dashboard>
            <ReportIssue></ReportIssue>
        </div>
    );
};

export default Home;