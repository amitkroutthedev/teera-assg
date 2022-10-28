import React from "react";
import HeadSection from "../HeadSection";
import Tags from "./Tags";

function DiscoverSearchSection() {
  return (
    <section className="m-4">
      <HeadSection head={"Discover"} />
      <input
        placeholder="Articles,Excrcises,Diets"
        className="border-2 border-black w-11/12 text-xl p-2 rounded-md"
      />
      <div className="flex flex-row flex-wrap">
        <Tags tagname="Fibre" />
        <Tags tagname="Planks" />
        <Tags tagname="HIIT" />
        <Tags tagname="Strength" />
        <Tags tagname="Plyometrics" />
        <Tags tagname="Electrolytes" />
        <Tags tagname="Protein" />
      </div>
    </section>
  );
}

export default DiscoverSearchSection;
