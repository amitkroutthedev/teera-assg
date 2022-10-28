import React from "react";

function ForYouCard({ name }) {
  return (
    <div
      className="w-48 h-28 flex justify-start items-end rounded-lg"
      style={{
        backgroundImage: `url("https://picsum.photos/256/192")`,
        backgroundRepeat: "no-repat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      <p className="p-2">{name}</p>
    </div>
  );
}

export default ForYouCard;
