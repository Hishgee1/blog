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
          <div className="absolute top-[630px] left-[390px] bg-white w-[20%] h-[152px] rounded-xl p-9 flex flex-col gap-2  ">
            <p className="text-sm font-bold text-blue-600 p-1">{person.name}</p>
            <p className="text-sm text-gray-900 text-lg font-black">{person.text}</p>
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
