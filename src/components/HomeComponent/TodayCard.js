import React from "react";

function TodayCard({ trainingName, duration, active }) {
  return (
    <div className="flex flex-row h-28  items-center rounded-lg p-2 my-2 bg-light-dark">
      <img src="https://picsum.photos/100" alt="error" />
      <div className="px-2 space-y-6">
        <p className={` ${active ? "text-violet" : "text-white"}`}>
          {trainingName}
        </p>
        <p className="text-white">{duration} days challenge</p>
      </div>
    </div>
  );
}

export default TodayCard;
