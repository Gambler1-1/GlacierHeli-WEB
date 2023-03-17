import React, { useContext } from 'react'
import AdminHeader from '../components/adminDashboard/AdminHeader'
import AdminSidebar from '../components/adminDashboard/AdminSidebar'
import { UserContext } from '../components/adminDashboard/userContext'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';



const AdminPanel = () => {
    const userContext = useContext(UserContext);
    const [auth,setAuth]= useState(false)
    
    const navigate = useNavigate();
    const checkAuth= async()=>{
        const token = localStorage.getItem('token')
        if(token){
            setAuth(true)
        }else{
            setAuth(false)
            navigate('/admin')
        }
    }
    useEffect(() => {
        checkAuth();
      }, [auth]);


    if (auth) {

        return (<>
            <AdminHeader />
            <AdminSidebar />
        </>
        )
    }
    else{
      navigate("/panel");

    }




}

export default AdminPanel