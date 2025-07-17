import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 w-full z-50">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="mb-6 md:mb-0 flex flex-col items-start">
                        <Link to="/" className="flex items-center mb-2">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16 bg-white rounded-lg p-1"
                                alt="Logo"
                            />
                        </Link>
                        <span className="text-sm text-gray-400">&copy; 2023 BlogWeb. All Rights Reserved.</span>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Navigation</h2>
                        <ul className="text-gray-300 font-medium space-y-2">
                            <li>
                                <Link to="/" className="hover:underline hover:text-gray-100 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/hustling" className="hover:underline hover:text-gray-100 transition-colors">Hustling</Link>
                            </li>
                            <li>
                                <Link to="/culture" className="hover:underline hover:text-gray-100 transition-colors">Culture</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:underline hover:text-gray-100 transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Legal</h2>
                        <ul className="text-gray-300 font-medium space-y-2">
                            <li>
                                <Link to="#" className="hover:underline hover:text-gray-100 transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:underline hover:text-gray-100 transition-colors">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}