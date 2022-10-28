import React from "react";

function Tags({ tagname }) {
  return (
    <button className="rounded-3xl px-4 py-2 m-2 bg-gray text-white">
      {tagname}
    </button>
  );
}

export default Tags;
