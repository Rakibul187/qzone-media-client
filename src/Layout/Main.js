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
            <div className='grid grid-cols-12'>
                <div className='col-span-2'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='col-span-8'>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-2'>
                    <RightSideNave></RightSideNave>
                </div>
            </div >
            <Footer></Footer>
        </div>
    );
};

export default Main;