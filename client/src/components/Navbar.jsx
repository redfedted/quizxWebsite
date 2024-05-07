import { useState } from "react";
// import img from "/src/images/nobgcampus.png";
import img from "/src/svgs/QXlogo.svg";

function Navbar() {
  const [click, setClick] = useState("Home");

  return (
    <div className="mb-[2.5rem] flex flex-col lg:mb-[2.375rem]    gap-[5.437rem]">
      <div className="mt-[2rem] flex  justify-center ">
        <div className="border-1 rounded-full border border-solid  border-[#CF0804] p-[0.347rem] text-[1rem] font-normal">
          <button
            onClick={() => {
              setClick("Home");
            }}
            className={`transform-gpu rounded-full   duration-700 ${click == "Home" ? "bg-[#CF0804] text-white " : "bg-white"} px-[2.364rem] py-[0.678rem] lg:px-[2.25rem] lg:py-[0.593rem]`}
          >
            Home
          </button>
          <button
            onClick={() => {
              setClick("Join");
            }}
            className={`transform-gpu  rounded-full duration-700 ${click == "Join" ? "bg-[#CF0804] text-white  " : "bg-white"} px-[2.364rem]   py-[0.678rem] lg:px-[2.25rem]  lg:py-[0.593rem]`}
          >
            Join Waitlist
          </button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start lg:pl-[6%]">
        {" "}
        <img className="w-[15rem]" src={img} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
