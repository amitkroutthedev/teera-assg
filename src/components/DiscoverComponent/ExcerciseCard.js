import React from "react";

function ExcerciseCard({ excerciseName }) {
  return (
    <div
      className="h-40 w-40 m-4 flex items-end rounded-md"
      style={{
        backgroundImage: `url("https://picsum.photos/100")`,
        backgroundRepeat: "no-repat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      <p className="text-white">{excerciseName}</p>
    </div>
  );
}

export default ExcerciseCard;
