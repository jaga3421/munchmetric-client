import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <nav className="w-full bg-gray-100 shadow sticky top-0 z-50">
      <div className="container mx-auto p-2 max-w-6xl flex justify-between items-center">
        <a href="/" className="text-2xl  text-green-600">
          <span>Munch</span>
          <span className="font-bold">Metrics</span>
        </a>
        <div>
          <button className="text-green-800 bg-primary-500 hover:bg-primary-700 px-4 py-2 rounded">
            <Bars3Icon className="h-6 w-6 text-green-600" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
