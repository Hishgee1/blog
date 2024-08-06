import react from "react";

const error = () =>{
    return(
        <div className="flex justify-center items-center gap-[100px] w-[642px] m-auto my-[100px] h-[208px] "id="haha">
           <h1 className="" id="haha1">404</h1>
           <div className="flex flex-col gap-[20px]">
            <h1 id="font" className="font-semibold font-black">Page Not Pound</h1>
            <p className="font-normal">We're sorry, This page is unknown or does not exist the page you are looking for.</p>
            <button className="bg-blue-600 text-white w-[130px] h-[40px rounded-md py-[10px] px-4 ">Back to home</button>
           </div>
        </div>
    );
}

export default error