import React from "react";
import GoalCard from "./GoalCard";

function GoalSection() {
  return (
    <section className="">
      <div className="flex flex-row justify-between mx-4 my-2">
        <p className="text-white font-semibold">Goal</p>
        <button className="text-violet font-light">View All</button>
      </div>
      <div className="flex flex-row overflow-x-auto space-x-3">
        <GoalCard goals={"Glasses of Water"} quantity={"5/6"} />
        <GoalCard goals={`Calories Burned`} quantity={"150/300"} />
        <GoalCard goals={"Steps"} quantity={"8K/14k"} />
      </div>
    </section>
  );
}

export default GoalSection;
