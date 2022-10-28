import React from "react";
import OngoingCard from "./OngoingCard";

function OngoingSection() {
  return (
    <section>
      <div className="mb-2 flex justify-between">
        <p className="font-semibold">Ongoing</p>
        <button className="font-semibold">Add New Routine</button>
      </div>
      <div className="flex flex-row flex-wrap space-x-2">
        <OngoingCard
          name={"Summer Yoga"}
          time={20}
          bodyPart={"Full Body"}
          days={21}
          calories={3}
        />
        <OngoingCard
          name={"Total Arm"}
          time={20}
          bodyPart={"Arms"}
          days={10}
          calories={2}
        />
      </div>
    </section>
  );
}

export default OngoingSection;
