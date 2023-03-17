import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TiUser } from 'react-icons/ti';
import { Navigate, useNavigate } from 'react-router-dom'
import { RiTimeLine } from 'react-icons/ri';
import axios from 'axios';

function BookingForm() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        date: "",
        noOfPassengers: "",
        time: "",
        phone: "",
        country: "",


    });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    const handleSelect = (e) => {
        setData({ ...data, gender: e.target.value });
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const url = "";
            const response = axios.post(url, data)

        } catch (error) {
            console.log(error)
        }
        navigate('/cart');

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='sm:grid sm:grid-cols-2 gap-3'>
                    <div className="mb-6">
                        <input
                            className="mt-4 border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            required
                            value={data.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            className="mt-4 border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            required
                            value={data.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-3'>

                    <div className="">
                        <input
                            className="border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg"
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Your Phone Number"
                            required
                            value={data.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="">
                        <input
                            className="border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg"
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Country"
                            required
                            value={data.country}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <DatePicker

                    placeholderText="Select Travel Date: *"
                    className="mt-4 border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg"
                    // selected={startDate}
                    onChange={handleChange}
                    value={data.date}
                />
                <div className="relative">
                    <div className="flex items-center mt-4 border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg ">
                        <TiUser className="text-gray-500" />
                        <input
                            type="number"
                            id="numTravelers"
                            className="outline-none bg-transparent flex-1 text-lg"
                            name="numTravelers"
                            onChange={handleChange}
                            value={data.noOfPassengers}
                            min="1"
                            required
                            placeholder="Enter number of travellers"
                        />
                    </div>
                </div>

                <div className="relative">
                    <div className="flex items-center mt-4 border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg ">
                        <RiTimeLine className="text-gray-500" />

                        <select id="startTime" name="startTime" placeholder="Enter number of travellers"
                            value={data.time} onChange={handleChange} className="outline-none bg-transparent flex-1 text-lg">
                            <option value=""></option>
                            <option value="9:00">9:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>

                        </select>

                    </div>
                </div>
                <button type="submit" className="btn my-6 bg-[#50A477] text-white font-semibold py-[10px] w-full rounded-lg cursor-pointer">
                    Book Now
                </button>
            </form>
        </div>
    );
}
export default BookingForm;