import React from "react";
import { GiWeightLiftingUp, GiFruitBowl } from "react-icons/gi";
import { TbPhysotherapist } from "react-icons/tb";
import ConsultCard from "../components/ConsultComponent/ConsultCard";
import HeadSection from "../components/HeadSection";

function Consult() {
  return (
    <div className="h-screen overflow-x-hidden">
      <HeadSection head={"Consult"} />
      <input
        placeholder="Search"
        className="border-2 border-black w-11/12 text-xl p-2"
      />
      <div className="inline-flex rounded-md shadow-sm  w-11/12" role="group">
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center py-2 px-4 text-lg font-semibold  basis-1/3 text-center text-white"
        >
          <GiWeightLiftingUp size={50} /> Trainer
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center py-2 px-4 text-lg font-semibold basis-1/3 text-center text-white"
        >
          <GiFruitBowl size={50} /> Dieticians
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center py-2 px-4 text-lg font-semibold basis-1/3 text-center text-white"
        >
          <TbPhysotherapist size={50} /> Therapists
        </button>
      </div>
      <div className="flex flex-row flex-wrap space-x-4">
        <ConsultCard
          name={"Manish Saxena"}
          postion={"General Fitness Trainer"}
          expYears={6}
          tags={"Fitness,Wellness"}
          price={500}
        />
        <ConsultCard
          name={"Shreya Sharma"}
          postion={"Personal Trainer"}
          expYears={4}
          tags={"Fitness,Yoga"}
          price={350}
        />
      </div>
    </div>
  );
}

export default Consult;
