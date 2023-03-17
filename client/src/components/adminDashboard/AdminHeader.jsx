import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/images/glacier.png"
import { UserContext } from '../utils/UserContext';
import { useNavigate } from 'react-router-dom';


const AdminHeader = () => {
    const navigate = useNavigate();

    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() => {
        fetch('https://glacierheli-solution.vercel.app/api/v1/profile', {
            credentials: 'include'
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            });
        });
    }, []);

    function logout() {
        localStorage.removeItem('token')
        fetch('http://localhost:4000/api/v1/logout', {
            credentials: 'include',
            method: 'POST',
        })
            setUserInfo(null);
            navigate('/admin')
    }
    
    const email = localStorage.getItem('token'); 

    return (
        <nav className="bg-[#222222]">
            <div className="mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-12">
                    <img src={logo} alt="" className="w-[130px] h-max" />

                    <div className="flex items-center text-white">
                        {email && (
                            <>
                                <a onClick={logout}>Logout</a>
                            </>
                        )}
                        {!email && (
                            <>
                                <Link to="/admin">Login</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminHeader;