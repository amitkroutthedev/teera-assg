import React from "react";

function GoalCard({ goals, quantity }) {
  return (
    <div className="border-2 border-sky-500 w-40 h-40 rounded-md bg-light-dark flex flex-col items-center justify-center">
      <p className="text-gray">{quantity}</p>
      <p className="text-gray">{goals}</p>
    </div>
  );
}

export default GoalCard;
