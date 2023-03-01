import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="mx-auto bg-white w-full max-w-xs">
      <label className="text-sm text-gray-800">Choose your role</label>
      <div className="mt-1">
        <select className="mt-1 block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
          <option value="1">creator</option>
          <option value="2">student</option>
        </select>
      </div>
      <Link to="/feed">
      <button  className="px-6 py-2 mt-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        next
      </button>
        </Link>
    </div>
  );
};

export default Form;
