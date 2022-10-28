import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex flex-row justify-center min-h-fit w-full p-0 bg-light-dark space-y-6 space-x-10 lg:min-h-screen lg:w-1/6 lg:py-52 lg:flex-col sm:flex sm:flex-wrap">
      <div className="my-6 lg:mx-10 lg:my-0">
        <Link to="/" className="text-sm md:text-2xl text-white">
          Home
        </Link>
      </div>
      <div className="">
        <Link to="/discover" className="text-sm md:text-2xl text-white">
          Discover
        </Link>
      </div>
      <div className="">
        <Link to="/spaces" className="text-sm md:text-2xl text-white">
          Spaces
        </Link>
      </div>
      <div className="">
        <Link to="/consult" className="text-sm md:text-2xl text-white">
          Consult
        </Link>
      </div>
      <div className="">
        <Link to="/routine" className="text-sm md:text-2xl text-white">
          Routine
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
