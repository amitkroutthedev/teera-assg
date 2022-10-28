import React from "react";
import HeadSection from "../components/HeadSection";
import ForYouSection from "../components/RoutineComponent/ForYouSection";
import OngoingSection from "../components/RoutineComponent/OngoingSection";

function Routine() {
  return (
    <div className="max-h-fit">
      <HeadSection head={"My routines"} />
      <OngoingSection />
      <ForYouSection />
    </div>
  );
}

export default Routine;
