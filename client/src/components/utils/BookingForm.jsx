import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TiUser } from 'react-icons/ti';
import { Navigate, useNavigate } from 'react-router-dom'
import { RiTimeLine } from 'react-icons/ri';
import axios from 'axios';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


function BookingForm() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [total, setTotal] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [country, setCountry] = useState("");
    const [sent, setSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleTime = (e) => {
        setTime(e.target.value);
    };
    const handleCountry = (e) => {
        setCountry(e.target.value);
    };
    const handleContact = (e) => {
        setContact(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleTotal = (e) => {
        setTotal(e.target.value);
    };

    const handleDate = (date) => {
        setDate(date);
    };
    const formSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        let data = {
            name: name,
            email: email,
            phone: contact,
            country: country,
            noOfPassengers: total,
            date: date,
            time: time
        };
        axios
            .post('http://localhost:5000/api/v1/createOrder', data)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data.order._id,"data")
                    let id = res.data.order._id
                    setSent(true);
                    setIsLoading(false);
                    navigate(`/cart/${id}`);
                } else {
                    console.log("Error: ", res.statusText);
                    setIsLoading(false);
                }
                console.log(data)

            })
            .catch((error) => {
                console.log("Error: ", error);
                setIsLoading(false);
            });
    };

    return (
        <div>
            <form onSubmit={formSubmit}>
                <div className='sm:grid sm:grid-cols-2 gap-3'>
                    <div className="mb-6">
                        <input
                            className="mt-4 border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            required
                            value={name}
                            onChange={handleName}
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
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-3'>

                    <div className="">
                        <PhoneInput
                            className="border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg"
                            placeholder="Enter phone number"
                            required
                            value={contact}
                            onChange={setContact}
                            countrySelectProps={{ className: '' }}
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
                            value={country}
                            onChange={handleCountry}
                        />
                    </div>
                </div>

                <DatePicker

                    placeholderText="Select Travel Date: *"
                    className="mt-4 border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg"
                    // selected={startDate}
                    onChange={handleDate}
                    value={date}
                />
                <div className="relative">
                    <div className="flex items-center mt-4 border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg ">
                        <TiUser className="text-gray-500" />
                        <input
                            type="number"
                            id="numTravelers"
                            className="outline-none bg-transparent flex-1 text-lg"
                            name="numTravelers"
                            onChange={handleTotal}
                            value={total}
                            required
                            placeholder="Enter number of travellers"
                        />
                    </div>
                </div>

                <div className="relative">
                    <div className="flex items-center text-gray-500 mt-4 border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg ">
                        <RiTimeLine className="text-gray-500" />

                        <select id="startTime" name="startTime"
                            value={time} onChange={handleTime} className="outline-none bg-transparent flex-1 text-lg">
                            <option value="">Enter tour starting time</option>
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