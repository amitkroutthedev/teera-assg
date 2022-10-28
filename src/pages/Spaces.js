import React from "react";
import HeadSection from "../components/HeadSection";
import EventNearbyCard from "../components/SpacesComponent/EventNearbyCard";
import FriendsSection from "../components/SpacesComponent/FriendsSection";

function Spaces() {
  return (
    <div className="h-screen overflow-x-hidden">
      <HeadSection head={"Spaces"} />
      <div className="flex flex-col md:flex-row justify-between">
        <FriendsSection />
        <section className=" w-1/2">
          <p className="m-2 text-white font-semibold">Events Nearby</p>
          <div className="w-fit">
            <EventNearbyCard />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Spaces;
