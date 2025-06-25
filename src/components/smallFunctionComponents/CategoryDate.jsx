import React from 'react'
import sideHustles from '../postsData/sideHustles.json'

function CategoryDate() {
    const { category, date } = sideHustles; 
    return (
        <div className="flex items-center justify-between sm:p-1 md:p-2 lg:p-3 xl:p-3.5 gap-3">
            <span className="uppercase text-sm tracking-widest text-blue-700 font-semibold bg-blue-100 sm:px-1.5 md:px-2 lg:px-2.5 sm:py-1 md:py-1.5 lg:py-2 rounded">
                {category}
            </span>
            <span className="text-sm text-gray-500">{new Date(date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>
    )
}

export default CategoryDate