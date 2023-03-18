import React, { useContext, useState } from "react";
import logo from '../assets/images/logoAdmin.png'
import { UserContext } from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

import axios from 'axios'

export default function Admin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext)

    const navigate = useNavigate();

    async function login(ev) {
        ev.preventDefault();
        try {
            const response = await axios.post('https://www.glacierheli.is/api/v1/login', {
                email, password
            });
            console.log(response, "RESPONSE")
            setUserInfo(response.data.token)
            localStorage.setItem('token', response.data.token)
       navigate("/panel");
        } catch (error) {
            console.log(error, 'ERROR');
            alert(error.response.data.msg)
        }
        
    }
    return (
        <div className="flex h-screen bg-gray-200">

            <div className="w-full max-w-md m-auto rounded-lg border border-gray-300 shadow-default pb-4 px-16">
                <div className="text-center">
                    <img src={logo} alt="Admin Logo" className="h-30 w-40 mx-auto" />
                </div>
                <h1 className="text-2xl font-medium text-center text-gray-800 mb-6">LOG IN TO ADMIN PANEL</h1>
                <form className="register" onSubmit={login}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-black w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign in
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

