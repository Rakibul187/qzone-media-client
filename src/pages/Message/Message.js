import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const Message = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='bg-slate-50 h-[100vh]'>
                <div className='pt-24'>
                    <h1>Cooming soon</h1>
                </div>
            </div>
        </div>
    );
};

export default Message;