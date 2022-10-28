import React from "react";

function EventNearbyCard() {
  return (
    <div className="w-80 lg:w-fit bg-light-dark rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-2">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://picsum.photos/800/150"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Yoga for begineers
          </h5>
        </a>
        <div className="flex flex-row mb-3">
          <p className="font-normal text-grey-light mx-2">SEP 7 </p>
          <p className="font-normal text-grey-light mx-2">10:00AM </p>
          <p className="font-normal text-grey-light mx-2">2 hrs</p>
        </div>
        <a
          href="#"
          className="w-full inline-flex justify-center py-2 px-3 text-sm font-medium bg-gray rounded-lg"
        >
          Attend
        </a>
      </div>
    </div>
  );
}

export default EventNearbyCard;
