import axios from "axios";
import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Form2 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [tour, setTour] = useState("");
    const [total, setTotal] = useState("");
    const [date, setDate] = useState("");
    const [sent, setSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleTour = (e) => {
        setTour(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleTotal = (e) => {
        setTotal(e.target.value);
    };

    const handleDate = (e) => {
        setDate(e.target.value);
    };
    const formSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        let data = {
            name: name,
            email: email,
            contact: contact,
            tour: tour,
            total: total,
            date: date
        };
        axios
            .post('http://localhost:4000/api/v1/form2', data)
            .then((res) => {
                if (res.status === 200) {
                    setSent(true);
                    setIsLoading(false);
                    resetForm();
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
    const resetForm = () => {
        setName("");
        setEmail("");
        setContact("");
        setTotal("");
        setTour("")
        setDate("");
        setTimeout(() => {
            setSent(false);
        }, 8800);
    };
    return (

        <form
            method="POST"
            onSubmit={formSubmit}
            className="contact-form  mt-4 bg-white shadow-md rounded py-5 lg:px-5  md:p-10 h-full lg:h-[560px] xl:h-full"
            id="contact-form"
        >
            <div className="mb-10 text-center">

                <label
                    className="text-[#50A477] truncate uppercase text-[25px] xl:text-[41px] fill-white align-top leading-none font-semibold pt-3"
                    for="password"
                >
                    Or Send your query
                </label>
            </div>

            <div className="mb-2">
                <label className="text-[13px] font-bold">Name: <span className="text-[#941B1B]">*</span></label>
                <input
                    className="placeholder-[#9CA3AF] mt-2 border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg "
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    required
                    value={name}
                    onChange={handleName}
                />
            </div>


            <div className="mb-2">
                <label className="text-[13px] font-bold">Email: <span className="text-[#941B1B]">*</span></label>
                <input
                    className="placeholder-[#9CA3AF] mt-2 border-solid border-2 border-black pl-[12px] h-9 w-full rounded-lg "
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email Address"
                    required
                    value={email}
                    onChange={handleEmail}
                />
            </div>
            <div className="lg:grid lg:grid-cols-2 gap-8">
                <div className="mb-2">
                    <label className="text-1xl font-bold ">Tour: <span className="text-[#941B1B]">*</span></label>
                    <input
                        className="placeholder-[#9CA3AF] mt-2 border-solid border-2 border-black pl-[24px] h-9 w-full rounded-lg "
                        type="text"
                        name="tour"
                        id="tour"
                        placeholder="Enter tour name"
                        required
                        value={tour}
                        onChange={handleTour}
                    />
                </div>
                <div className="mb-2">
                    <div className="mb-2">
                        <label className="text-1xl font-bold ">Contact: <span className="text-[#941B1B]">*</span></label>
                    </div>
                    <PhoneInput
                        className="placeholder-[#9CA3AF] mt-2 border-solid border-2 border-black pl-[24px] h-9 w-full rounded-lg "
                        placeholder="Enter phone number"
                        required
                        value={contact}
                        onChange={setContact}
                        countrySelectProps={{ className: '' }}
                    />
                </div>
            </div>
            <div className="mb-2">
                <label className="text-1xl font-bold">Total Passengers: <span className="text-[#941B1B]">*</span></label>

                <input
                    className="placeholder-[#9CA3AF] mt-2 border-solid border-2 border-black pl-[24px] h-10 w-full rounded-lg "
                    type="textarea"
                    name="message"
                    id="problem"
                    placeholder="Example: 3 Adults 1 Child"
                    required
                    value={total}
                    onChange={handleTotal}
                />
            </div>
            <div className="mb-2">
                <label className="text-1xl font-bold">Date: <span className="text-[#941B1B]">*</span></label>

                <input
                    className="placeholder-[#9CA3AF] mt-2 border-solid border-2 border-black pl-[24px] h-10 w-full rounded-lg "
                    type="text"
                    name="message"
                    id="problem"
                    placeholder="Date and time(range)"
                    required
                    value={date}
                    onChange={handleDate}
                />
            </div>

            <div className={sent ? 'msg msgAppear' : 'msg'}>
                {sent ? (
                    <h1 className="text-white text-2xl">
                        &#9989; Thank you! Your appointment has been recorded!
                    </h1>
                ) : isLoading ? (
                    <div className="flex justify-center">
                        <Oval color="#002c52" height={50} width={50} />
                    </div>
                ) : (
                    <button type="submit" className="btn my-6 bg-[#50A477] text-white font-semibold py-[10px] w-full rounded-lg cursor-pointer">
                        Submit
                    </button>
                )}
            </div>


        </form>

    );

};
export default Form2

