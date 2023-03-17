import { useState } from "react";

function Checkout() {
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        phone: "",
        country: "",
        cardName: "",
        cardNumber: "",
        cardExpMonth: "",
        cardExpYear: "",
        cardCvc: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: handle form submission
    };

    return (
        <div className="min-h-screen flex flex-col justify-center">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 bg-white mx-8 md:mx-0 border border-2 shadow rounded-2xl sm:p-4">
                    <div className="mx-auto">
                        <div className="flex flex-col items-center">

                            <div className="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-14 w-14 rounded-full p-3 border border-blue-300"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.862 6.005a.5.5 0 01.636-.318L15.5 8.5l-8.002 3.813a.5.5 0 01-.636-.318L6 6.5l.862-.495z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M5.096 5.096A2 2 0 016.5 4.5h7a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-1.404-.596L2.5 10l2.596-4.904zM17.5 4.5a3 3 0 00-3-3h-7a3 3 0 00-3 3v6a3 3 0 003 3h7a3 3 0 003-3v-6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <h1 className="text-gray-600 text-xl">
                                    Checkout
                                </h1>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="">
                            <div className="mt-2 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-4">

                                <div>
                                    <label className="block text-gray-600 font-semibold">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="placeholder-black bg-white border border-2 pl-[24px] h-7 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-semibold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="placeholder-black bg-white border border-2 pl-[24px] h-7 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-semibold">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="placeholder-black bg-white border border-2 pl-[24px] h-7 w-full"
                                    />
                                </div>


                              
                                <div>
                                    <label className="block text-gray-600 font-semibold">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="placeholder-black bg-white border border-2 pl-[24px] h-7 w-full"
                                    />
                                </div>
                            </div>
                            <h2 className="text-lg mt-2 text-center font-semibold mb-4 text-gray-600">
                                Payment Information
                            </h2>
                            <div className="sm:grid sm:grid-cols-2 sm:gap-x-4">
                                <div>
                                    <label className="block text-gray-600 font-semibold">
                                        Card Number
                                    </label>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        value={formData.cardNumber}
                                        onChange={handleChange}
                                        className="placeholder-black bg-white border border-2 pl-[24px] h-7 w-full "
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-semibold">
                                        Card Name
                                    </label>
                                    <input
                                        type="text"
                                        name="cardName"
                                        value={formData.cardName}
                                        onChange={handleChange}
                                        className="placeholder-black bg-white border border-2 pl-[24px] h-7 w-full"
                                    />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-3 sm:gap-x-4 mt-2">
                                <div>
                                    <label className="block text-gray-600 font-semibold">
                                        Expiration Month
                                    </label>
                                    <input
                                        type="text"
                                        name="cardExpMonth"
                                        value={formData.cardExpMonth}
                                        onChange={handleChange}
                                        className="placeholder-black bg-white border border-2 pl-[24px] h-7 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-semibold">
                                        Expiration Year
                                    </label>
                                    <input
                                        type="text"
                                        name="cardExpYear"
                                        value={formData.cardExpYear}
                                        onChange={handleChange}
                                        className="placeholder-black bg-white border border-2 pl-[24px] h-7 w-full "
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 font-semibold">
                                        CVC
                                    </label>
                                    <input
                                        type="text"
                                        name="cardCvc"
                                        value={formData.cardCvc}
                                        onChange={handleChange}
                                        className="placeholder-black bg-white border border-2 pl-[24px] h-7 w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black"
                                >
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Checkout;