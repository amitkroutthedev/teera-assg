import React from "react";
import FriendsSubSection from "./FriendsSubSection";

function FriendsSection() {
  return (
    <section className="p-4 w-full max-w-md rounded-lg shadow-md sm:p-8 bg-dark">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Exercise with Friends
        </h5>
        <a href="#" className="text-sm font-medium text-violet hover:underline">
          Add friends
        </a>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <FriendsSubSection
            name={"Abhishek"}
            lastOnline={"30 min"}
            noOfCoin={165}
            noOfSteak={12}
          />
          <FriendsSubSection
            name={"Lakshya"}
            lastOnline={"0 min"}
            noOfCoin={1765}
            noOfSteak={34}
          />
          <FriendsSubSection
            name={"Khusi"}
            lastOnline={"8hr"}
            noOfSteak={15}
            noOfCoin={80}
          />
          <FriendsSubSection
            name={"Saloni"}
            lastOnline={"2hr"}
            noOfSteak={0}
            noOfCoin={2}
          />
          <FriendsSubSection
            name={"Kartik"}
            lastOnline={"1d"}
            noOfSteak={7}
            noOfCoin={245}
          />
        </ul>
      </div>
    </section>
  );
}

export default FriendsSection;
