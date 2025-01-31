import React from "react";

function Item({ data }) {
  return (
    <div className="shadow-md bg-white text-center">
      <p className="text-2xl p-10">{data.activity}</p>
      <p className="text-s p-2">{data.type}</p>
    </div>
  );
}

export default Item;
