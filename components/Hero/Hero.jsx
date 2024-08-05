import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import people from "./data";

export default function Example() {
  return (
    <ul className=" mt-[100px]">
      {people.map((person) => (
        <li key={person.text} className="py-4 flex">
          <img
            className="h-[600px] w-[1216px] m-auto relative rounded-xl brightness-[0.5]"
            src={person.image}
            alt=""
          />
          <div className="absolute top-[600px] left-[530px] bg-white w-[20%] h-[152px] rounded-xl p-9 ">
            <p className="text-sm font-bold text-gray-900 p-1">{person.name}</p>
            <p className="text-sm text-gray-900 text-lg">{person.text}</p>
            <p className="text-sm text-gray-500">{person.string}</p>
          </div>
        </li>
      ))}
      <div>
        <button className="w-10 h-10">
          <GrFormPrevious />
        </button>
      </div>
    </ul>
  );
}
