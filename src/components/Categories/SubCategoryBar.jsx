import React from "react";

const CategoryBar = ({ categories }) => {
  if (!categories.length) return null;

  return (
    <div className="category-navbar flex gap-3 mt-4">
      {categories.map((cat, index) => (
        <button key={index} className="px-3 py-1 bg-gray-200 rounded">
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
