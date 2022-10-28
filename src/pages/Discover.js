import React from "react";
import DiscoverSearchSection from "../components/DiscoverComponent/DiscoverSearchSection";
import ExcerciseSection from "../components/DiscoverComponent/ExcerciseSection";

function Discover() {
  return (
    <div className="h-screen overflow-x-hidden">
      <DiscoverSearchSection />
      <ExcerciseSection />
    </div>
  );
}

export default Discover;
