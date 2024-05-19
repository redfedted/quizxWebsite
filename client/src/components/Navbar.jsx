import { useEffect, useState } from "react";
// import img from "/src/images/nobgcampus.png";
import img from "/src/svgs/QXlogo.svg";
import { Link } from "react-router-dom";

function Navbar({ home }) {
  const [click, setClick] = useState("Home");

  useEffect(() => {
    setClick(home);
  }, [home]);

  return (
    <div className="mb-[2.5rem] flex flex-col gap-[5.437rem]    lg:mb-[2.375rem]">
      <div className="mt-[2rem] flex  justify-center ">
        <div className="border-1 rounded-full border border-solid  border-[#CF0804] py-[0.9rem] px-[0.5rem] text-[1rem] font-normal">
          {/* <button
            onClick={() => {
              setClick("Home");
            }}
            className={`transform-gpu rounded-full   duration-700 ${click == "Home" ? "bg-[#CF0804] text-white " : "bg-white"} px-[2.364rem] py-[0.678rem] lg:px-[2.25rem] lg:py-[0.593rem]`}
          >
            Home
          </button> */}
          <Link
            to="/home"
            onClick={() => {
              setClick("Home");
            }}
            className={`transform-gpu rounded-full   duration-700 ${click == "Home" ? "bg-[#CF0804] text-white " : "bg-white"} px-[2.364rem] py-[0.678rem] lg:px-[2.25rem] lg:py-[0.7rem]`}
          >
            Home
          </Link>

          <Link
            to="/joinwaitlist"
            onClick={() => {
              setClick("Join");
            }}
            className={`transform-gpu  rounded-full duration-700 ${click == "Join" ? "bg-[#CF0804] text-white  " : "bg-white"} px-[2.364rem]   py-[0.678rem] lg:px-[2.25rem]  lg:py-[0.7rem]`}
          >
            {" "}
            Join Waitlist
          </Link>
          {/* <button
            onClick={() => {
              setClick("Join");
            }}
            className={`transform-gpu  rounded-full duration-700 ${click == "Join" ? "bg-[#CF0804] text-white  " : "bg-white"} px-[2.364rem]   py-[0.678rem] lg:px-[2.25rem]  lg:py-[0.593rem]`}
          >
            Join Waitlist
          </button> */}
        </div>
      </div>
      {/* <div className="flex justify-center lg:justify-start lg:pl-[6%]">
        {" "}
        <img className="w-[15rem]" src={img} alt="" />
      </div> */}
    </div>
  );
}

export default Navbar;
