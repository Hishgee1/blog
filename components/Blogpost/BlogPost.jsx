import { useContext } from "react";
import postCard from "./blogPostCard";
import { SearchContext } from "@/pages/provider/search-provider";

export default function Example() {
  const {searchValue} = useContext(SearchContext)
  const filteredCard = postCard.filter((card) =>
  card?.name.includes(searchValue))
  return (
    <div className="w-[1216px] m-auto mt-20 ">
      <div className="flex flex-col gap-16 mb-10">
        <h2 className="font-bold text-base">All Blog Post</h2>
        <div className="flex justify-between">
          <ul className="flex gap-5">
            <li className="text-orange-300">All</li>
            <li>Design</li>
            <li>Travel</li>
            <li>Fashion</li>
            <li>Technology</li>
            <li>Branding</li>
          </ul>
        
          <p>View All</p>
        </div>
      </div>

      <div className=" grid grid-cols-3 grid-rows-3 gap-4  ">
        {filteredCard.map((cardm) => (
          <div key={cardm.id} className="p-4 border rounded-xl">
            <img
              className="h-[240px] w-[360px] m-auto rounded-xl brightness-[1 object-cover"
              src={cardm.image}
              alt=""
            />
            <div className=" w-[360px] h-[188px] p-2 flex flex-col gap-5">
              <p className="text-blue-700 w-[97px] h-[28px] rounded-md bg-slate-200 py-[2px] px-[8px]">
                {cardm.name}
              </p>
              <p className="text-black font-bold">{cardm.text}</p>
              <p className="text-slate-400">{cardm.date}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="h-12 w-[123px] border rounded-md py-3 px-5 mt-20 m-auto bg-slate-300 mb-20">
        Load More
      </p>
    </div>
  );
}
