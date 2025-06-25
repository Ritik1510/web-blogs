import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="mb-6 md:mb-0 flex flex-col items-start">
                        <Link to="/" className="flex items-center mb-2">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                        <span className="text-sm text-gray-500">&copy; 2023 BlogWeb. All Rights Reserved.</span>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Navigation</h2>
                        <ul className="text-gray-500 font-medium space-y-2">
                            <li>
                                <Link to="/" className="hover:underline">Home</Link>
                            </li>
                            <li>
                                <Link to="/hustling" className="hover:underline">Hustling</Link>
                            </li>
                            <li>
                                <Link to="/culture" className="hover:underline">Culture</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                        <ul className="text-gray-500 font-medium space-y-2">
                            <li>
                                <Link to="#" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}