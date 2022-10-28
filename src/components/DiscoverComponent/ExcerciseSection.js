import React from "react";
import ExcerciseCard from "./ExcerciseCard";

function ExcerciseSection() {
  return (
    <section>
      <div className="flex flex-row justify-between">
        <p>Exercises</p>
        <p>View More</p>
      </div>
      <div className="flex flex-row flex-wrap">
        <ExcerciseCard excerciseName={"5 Exercises for Back Pain Relief"} />
        <ExcerciseCard excerciseName={"11 Tips for Excercising Outdoors"} />
        <ExcerciseCard excerciseName={"A 10-Minute Lower Body Workout"} />
        <ExcerciseCard excerciseName={"4 Healty Vegetarian Recipes"} />
      </div>
    </section>
  );
}

export default ExcerciseSection;
