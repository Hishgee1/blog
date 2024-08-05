import React from "react";

const Contact = () => {
	return (
		<div className="w-auto h-300 bg-slate-700">
			<div>
			<h1>Contact us</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla corporis illo soluta similique suscipit saepe excepturi voluptates 
				consequatur ex dolores numquam unde, laboriosam velit esse iure? Illo, consequuntur neque?</p>

			</div>

			<div className="gap-4 bg-slate-400 flex justify-center items-center  ">
				<div>
				<h1>Address</h1>
				<p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
				</div>
				<div>
				<h1>Contact</h1>
				<p>313-332-8662
				info@email.com</p>
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