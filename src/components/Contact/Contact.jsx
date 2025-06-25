import React from 'react'

export default function Contact() {
    return (
        <div className="relative flex items-center justify-center min-h-[700px] bg-white py-6 px-2 sm:px-4">
            <div className="w-full max-w-6xl mx-auto">
                <div className="mt-4 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Contact Info */}
                        <div className="p-4 sm:p-6 bg-gray-100 rounded-lg flex flex-col justify-center">
                            <h1 className="text-2xl xs:text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight mb-2 break-words">
                                Get in touch:
                            </h1>
                            <p className="text-base xs:text-lg sm:text-xl font-medium text-gray-600 mt-1 mb-4 break-words">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-6 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-7 h-7 sm:w-8 sm:h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-3 text-sm xs:text-base sm:text-md tracking-wide font-semibold w-36 sm:w-40 break-words">
                                    NEW DELHI, INDIA 
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-7 h-7 sm:w-8 sm:h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-3 text-sm xs:text-base sm:text-md tracking-wide font-semibold w-36 sm:w-40 break-words">
                                    +91 9891355422
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-7 h-7 sm:w-8 sm:h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-3 text-sm xs:text-base sm:text-md tracking-wide font-semibold w-36 sm:w-40 break-words">
                                    web.blog@gmail.com
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="p-4 sm:p-6 flex flex-col justify-center bg-white rounded-lg shadow-md mt-6 md:mt-0">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none text-sm xs:text-base"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none text-sm xs:text-base"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none text-sm xs:text-base"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-32 bg-orange-700 text-white font-bold py-3 px-6 rounded-lg mt-4 hover:bg-orange-600 transition ease-in-out duration-300 text-sm xs:text-base"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}