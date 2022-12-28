import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../pages/LeftSideNav/LeftSideNav';
import RightSideNave from '../pages/RightSideNave/RightSideNave';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-3 w-full pt-16 bg-slate-50'>
                <div className='pl-16'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div >
                    <Outlet></Outlet>
                </div>
                <div className='pr-16'>
                    <RightSideNave></RightSideNave>
                </div>
            </div >
            <Footer></Footer>
        </div>
    );
};

export default Main;