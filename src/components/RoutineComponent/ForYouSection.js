import React from "react";
import ForYouCard from "./ForYouCard";

function ForYouSection() {
  return (
    <section className="py-4">
      <p className="font-semibold mb-3 text-white">Recommended for you</p>
      <div className="flex overflow-auto space-x-4 h-fit">
        <ForYouCard name={"HIIT"} />
        <ForYouCard name={"Cardio"} />
        <ForYouCard name={"Strength"} />
        <ForYouCard name={"Agility"} />
      </div>
    </section>
  );
}

export default ForYouSection;
