import React from "react";

const Contact = () => {
	return (
		<div className="m-auto h-[895px] w-[895px] mt-[60px]">
			<div className="w-[769px] h-[389px] pt-4  px-3 m-auto flex flex-col gap-[20px]">
				<div className="flex flex-col gap-[20px]">
				<h1 id="con" className="font-black">Contact us</h1>
		     	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla corporis illo soluta similique suscipit saepe excepturi voluptates 
				consequatur ex dolores numquam unde, laboriosam velit esse iure? Illo, consequuntur neque?</p>
				</div>
				<div className="gap-4 flex justify-between w-[638px] h-[153px] ">
				<div className="h-[133px] w-[294px] rounded-xl border p-4 flex flex-col gap-[10px]">
				   <h1  className="font-black" >Address</h1>
				   <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
				</div>
				<div className=" h-[133px] w-[294px] rounded-xl border p-4 flex flex-col gap-[10px]">
				   <h1  className="font-black">Contact</h1>
				    <p>313-332-8662
				    info@email.com</p>
				</div>
			</div>
			<div className="bg-slate-400 ">
				<div className="m-auto h-[440px] w-[643px] flex flex-col gap-8 ">
				<h1 className="font-black mt-3">Leave a Message</h1>
				<div className="w-[589px] h-[39px] flex justify-start gap-7">
				<input className="border p-3 w-[225px] rounded " type="name" placeholder="Your name"/>
				<input className="border p-3 w-[225px] rounded " type="email" placeholder="Your Email"/>
				</div>
				<input className="border p-3 w-[478px] rounded " type="subject" placeholder="Subject" />
				
				<textarea className="border p-3 w-[478px] rounded " id="w3review" name="w3review" rows="4" cols="50"placeholder="Message">

               </textarea>
			   <button className="w-[180px] h-[40px] rounded-md pt-1 px-5 bg-blue-600 text-white">Send Message</button>
				</div>
				
				
			</div>

			</div>

		
			
		</div>
	
	);
		
	
};

export default Contact;
// import people from "./data"

//   export default function Example() {
// 	return (
// 	  <ul className="divide-y divide-gray-200">
// 		{people.map((person) => (
// 		  <li key={person.email} className="py-4 flex">
// 			<img className="h-10 w-10 rounded-full" src={person.image} alt="" />
// 			<div className="ml-3">
// 			  <p className="text-sm font-medium text-gray-900">{person.name}</p>
// 			  <p className="text-sm text-gray-500">{person.email}</p>
// 			</div>
// 		  </li>
// 		))}
// 	  </ul>
// 	)
//   }