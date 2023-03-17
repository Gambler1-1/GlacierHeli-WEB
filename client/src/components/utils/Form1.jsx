import axios from "axios";
import React, { useState } from "react";
import { Oval } from "react-loader-spinner";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubject = (e) => {
        setSubject(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };
    const formSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        let data = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };
        axios
            .post('http://localhost:4000/api/v1/form1', data)
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
        setSubject("");
        setMessage("");
        setTimeout(() => {
            setSent(false);
        }, 8800);
    };
    return (

        <form
            method="POST"
            onSubmit={formSubmit}
            className="contact-form  bg-white shadow-md rounded py-5 lg:px-5  md:p-10 h-full lg:h-[560px] xl:h-full"
            id="contact-form"
        >
            <div className="mb-10 text-center">

                <label
                    className="text-[#F7C033] truncate  text-[25px] xl:text-[30px] fill-white  leading-none font-semibold pt-3"
                    for="password"
                >
                    We're Ready, Let's Talk.
                </label>
            </div>

            <div className="mb-6">
                <input
                    className="placeholder-black bg-gray-200 pl-[24px] h-10 xl:h-14 w-full rounded-lg "
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
                    className="placeholder-black bg-gray-200 pl-[24px] h-10 xl:h-14 w-full rounded-lg "
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email Address"
                    required
                    value={email}
                    onChange={handleEmail}
                />
            </div>
            <div className="mb-6">
                <input
                    className="placeholder-black bg-gray-200 pl-[24px] h-12 xl:h-14 w-full rounded-lg "
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    value={subject}
                    onChange={handleSubject}
                />
            </div>
            <div>
                <textarea
                    className="mb-6 py-3 placeholder-black bg-gray-200 px-5 h-[60px] xl:h-[127px] w-full rounded-lg "
                    type="textarea"
                    name="message"
                    id="problem"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={handleMessage}
                />
            </div>

            <div className={sent ? 'msg msgAppear' : 'msg'}>
                {sent ? (
                    <h1 className="text-white text-2xl">
                        &#9989; Thank you! Your appointment has been recorded!
                    </h1>
                ) : isLoading ? (
                    <Oval color="#ffffff" height={60} width={60} />
                ) : (
                    <button type="submit" className="btn mb-6 bg-[#F7C033] text-white font-semibold py-[18px] w-full rounded-lg cursor-pointer">
                        Submit
                    </button>
                )}
            </div>


        </form>

    );

};
export default Form

