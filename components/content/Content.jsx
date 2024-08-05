import React from "react";

import card from "./blogCard";

export default function Example() {
  return (
    <div>
      <h2 className="w-[1200px] m-auto font-bold text-base">Trending</h2>
      <ul className=" flex w-[1216px] m-auto ">
        {card.map((cards) => (
          <li key={cards.id} className="py-4 flex  w-[1200px] m-auto relative">
            <img
              className="h-[320px] w-[289px] m-auto relative rounded-xl brightness-[0.5]"
              src={cards.image}
              alt=""
            />
            <div className="absolute top-[180px] left-[50px] w-[230px] h-[120px]">
              <p className="text-blue-700">{cards.name}</p>
              <p className="text-white">{cards.text}</p>
            </div>
          </li>
        ))}
        <div>
          <button></button>
        </div>
      </ul>
    </div>
  );
}
