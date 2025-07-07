import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="grid gap-2 bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="grid sm:flex sm:justify-between mx-full max-w-screen-xl">
                    <div className='h-full w-full flex items-center justify-between gap-2 md:gap-3'>
                        <div>
                            <Link to="/" className='h-full flex items-center justify-center'>
                                <img
                                    src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                    className="h-12"
                                    alt="Logo"
                                />
                            </Link>
                        </div>
                        <div className='h-full flex items-center justify-center lg:hidden'>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    {isMenuOpen ? (
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    ) : (
                                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className='h-full w-full flex items-center justify-between gap-2 md:gap-3'>
                        <div className='h-full flex items-center justify-center border-2 border-orange-800 rounded-lg'>
                            <Link
                                to="#"
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-normal rounded-lg text-lg px-2 md:px-3 lg:px-4 py- md:py-2 lg:py-3 focus:outline-none"
                            >
                                Log in
                            </Link>
                        </div>

                        <div className='px-3 md:px-3.5 lg:px-5 py-1 lg:py-1.5 h-full flex items-center justify-center'>
                            <Link
                                to="#"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-3.5 md:px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>

                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'} lg:block justify-center items-center w-full`}
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt font-medium lg:flex-row lg:space-x-8 lg:mt-0 p-2 md:p-2 lg:p-4">
                        <li>
                            <NavLink
                                to="/hustling"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                HUSTLING
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Culture"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                CULTURE
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/urban-nature"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                URBAN NATURE
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700 underline" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                CONTACT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                ABOUT
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}