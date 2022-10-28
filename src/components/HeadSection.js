import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiTwoCoins } from "react-icons/gi";
function HeadSection({ head }) {
  return (
    <section className="flex flex-row justify-between items-center m-4 bg-black">
      <div className="">
        <p className="text-xl md:text-3xl lg:text-6xl text-white">{head}</p>
      </div>
      <div className="flex flex-row">
        <div className="md:m-10">
          <button>
            <IoMdNotificationsOutline fill="white" fontSize={30} />
          </button>
        </div>
        <div className="md:m-10 bg-light-dark p-2">
          <button className="text-white flex flex-row text-lg items-center">
            <GiTwoCoins />
            245
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeadSection;
