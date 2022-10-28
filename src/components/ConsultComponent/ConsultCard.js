import React from "react";

function ConsultCard({ name, postion, expYears, tags, price }) {
  return (
    <div className="lg:w-full max-w-sm bg-gray rounded-lg m-2">
      <a href="#">
        <img
          className="p-2 rounded-t-lg"
          src="https://picsum.photos/400/200"
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="flex flex-col mt-2.5 mb-5">
          <p className="text-white">{postion}</p>
          <p className="text-white">{expYears} Years of Experience</p>
          <p className="text-white">{tags}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${price}/Session
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book a Session
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConsultCard;
