import { useState } from "react";
import Calendar from "react-calendar";
import TodayCard from "./TodayCard";
import "react-calendar/dist/Calendar.css";

function TodaySection() {
  const [value, onChange] = useState(new Date());
  return (
    <section className="flex flex-col-reverse md:flex-row-reverse lg:flex-row justify-between items-center">
      <div className="my-2 lg:w-full lg:mr-4">
        <div className="flex flex-row justify-between">
          <p className="text-white font-semibold">Today</p>
          <button className="text-violet font-light">View All</button>
        </div>
        <div className="overflow-y-scroll h-80">
          <TodayCard
            trainingName="Strength Training"
            duration="7"
            active={true}
          />
          <TodayCard
            trainingName="High Intensity Cardio"
            duration="30"
            active={false}
          />
          <TodayCard trainingName="Plyometric" duration="30" active={false} />
        </div>
      </div>
      <div className="rounded-lg">
        <Calendar onChange={onChange} value={value} />
      </div>
    </section>
  );
}

export default TodaySection;
