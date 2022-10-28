import React from "react";

function OngoingCard({ name, time, bodyPart, days, calories }) {
  return (
    <div className="max-sm:mx-1 bg-light-dark rounded-lg border border-gray-200">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://picsum.photos/400/200"
          alt="error"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {name}
          </h5>
        </a>
        <p className="font-normal text-grey-light">
          {time} mins | {bodyPart}
        </p>
        <div className=" mb-3 flex flex-row justify-between mr-10">
          <div>
            <p className="font-bold  text-grey-light">Days Completed</p>
            <p className="font-normal text-grey-light">{days}/30</p>
          </div>
          <div>
            <p className="font-bold  text-grey-light">Calories Burnt</p>
            <p className="font-normal text-grey-light">{calories}kcal</p>
          </div>
        </div>
        <a
          href="#"
          className="w-full inline-flex justify-center items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray rounded-lg"
        >
          Continue
        </a>
      </div>
    </div>
  );
}

export default OngoingCard;
