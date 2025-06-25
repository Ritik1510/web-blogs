import React, { createContext, useContext, useState } from "react";

const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  // You can set initial categories and activeCategory here or receive them as props
  const [categories, setCategories] = useState([
    "Local Entrepreneurship",
    "Culture",
    "Hustling",
    "Urban Nature"
  ]);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories, activeCategory, setActiveCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  return useContext(CategoriesContext);
}

function CategoriesComponent({ categories = [], activeCategory }) {
  return (
    <nav className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-4 px-4 py-2 overflow-x-auto">
        {categories.map((cat) => (
          <a
            key={cat}
            href={`#${cat.replace(/\s+/g, "-").toLowerCase()}`}
            className={`text-sm font-medium px-3 py-1.5 sm:py-2 lg:py-2.5 rounded-full transition ${cat === activeCategory
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default CategoriesComponent