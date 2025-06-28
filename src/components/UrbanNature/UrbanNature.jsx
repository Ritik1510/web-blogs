import React from 'react'
import { NavLink } from 'react-router-dom'
import SubCategories from '../Categories/SubCategories.jsx'
export default function UrbanNature() {

    const SubCategoriesArray = [
        "Local Entrepreneurship",
        "Crafting"
    ];

    return (
        <>
            {/* <div>
                <ul className='flex items-center justify-start p-1 md:p-2 lg:p-3 xl:p-4 gap-3 lg:gap-4 xl:gap-5'>
                    {SubCategoriesArray.map((subCategory, index) => (
                        <li key={index} className="text-base text-gray-900 bg-black p-4 md:5 lg:p-5.5 border-2 border-solid rounded-3xl border-gray-400">
                            <NavLink
                                to="/local-entrepreneurship"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-200 underline" : "text-white"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                                }
                            >
                                {subCategory}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div> */}
            <SubCategories subCategoryArray={SubCategoriesArray}/>
        </>
    );
}

