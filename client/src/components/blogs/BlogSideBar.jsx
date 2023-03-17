import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-full lg:w-1/4">
      <div className="p-4">
        <h2 className="text-lg font-medium mb-4">Search Blog</h2>
        <form className="mb-4">
          <input
            type="text"
            placeholder="Search blog..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;