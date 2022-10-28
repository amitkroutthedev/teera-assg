import GoalSection from "../components/HomeComponent/GoalSection";
import HeadSection from "../components/HeadSection";
import TodaySection from "../components/HomeComponent/TodaySection";

function Home() {
  return (
    <div>
      <HeadSection head={"Hi Praveen"} />
      <TodaySection />
      <GoalSection />
    </div>
  );
}

export default Home;
