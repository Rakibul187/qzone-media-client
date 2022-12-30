import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaUserNinja } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
            })
            .catch(e => console.error(e))
    }
    return (
        <div className="navbar fixed bg-base-100 px-10 shadow-slate-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/media'>Media</Link></li>
                        <li><Link to='/message'>Message</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
                <Link to='/'><button className="btn btn-ghost normal-case text-3xl mr-2"><span className='text-4xl text-primary h-10'>Q</span>zone</button></Link>
                <div className="form-control hidden md:block lg:block mr-2">
                    <input type="text" placeholder="Search" className="input h-9 w-60 input-bordered" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/media'>Media</Link></li>
                    <li><Link to='/message'>Message</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <button onClick={handleLogout} className='btn btn-outline btn-dark btn-sm h-4 mr-2'>LogOut</button>
                        :
                        <Link to='/login'><button className='btn btn-outline btn-info btn-sm h-4 mr-2'>Login</button></Link>
                }
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-6 rounded-full">
                        {
                            user?.uid ?
                                <img src={user?.photoURL} alt='' />
                                :
                                <span className='text-xl text-primary'><FaUserNinja></FaUserNinja></span>
                        }

                    </div>
                </label>
            </div>
        </div>
    );
};

export default Navbar;