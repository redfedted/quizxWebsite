import { useState } from "react";
import svg from "/src/svgs/arrow.svg";
import { useCollapse } from "react-collapsed";
function AboutQuizx({ heading, description, imgUrl }) {
  const config = {
    duration: 500,
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <div className="my-[2rem]">
      <div className="mx-[1.134rem] flex flex-col items-start ">
        <h1 className="w-9/12 pb-[1rem] text-[1.5rem] font-black">{heading}</h1>
        <h2 className="w-9/12 pb-[1rem]  text-[1rem]">{description}</h2>
        <ol className="list-disc pl-[1.134rem] " {...getCollapseProps()}>
          <li>
            Interactive and Gamified Learning for engaging students with lively,
            memorable education tools.
          </li>
          <li>
            AI-Powered Teaching Support for streamlining lecture prep and
            enhance classroom interaction.
          </li>
          <li>
            Curated Educational Content for connecting learners with the latest
            field-specific breakthroughs.
          </li>
          <li>
            Collaborative Learning Environment for fostering idea exchange and
            peer networking for collective intelligence.
          </li>
          <li className="pb-[1rem]">
            Personalized Academic Tools for organizing and deliver targeted
            knowledge efficiently.
          </li>
        </ol>{" "}
        {/* {isExpanded ? null : (
          <div
            className="mb-[2.188rem] flex w-[160px] items-center justify-between rounded-[0.5rem] bg-[#ECECEC] px-[1.5rem] py-[0.5rem]"
            {...getToggleProps()}
          >
            <button className="text-[0.75rem] ">More Information</button>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>
        )} */}
        {/* {isExpanded ? (
          <div className="mb-[2.188rem] flex w-[160px] items-center justify-between rounded-[0.5rem]  px-[1.5rem] py-[0.5rem]">
            {" "}
            <button className="text-[0.75rem] "></button>
          </div>
        ) : (
          <div
            className="mb-[2.188rem] flex w-[160px] items-center justify-between rounded-[0.5rem] bg-[#ECECEC] px-[1.5rem] py-[0.5rem]"
            {...getToggleProps()}
          >
            <button className="text-[0.75rem] ">More Information</button>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>
        )} */}
        <div
          className="mb-[2.188rem] flex w-[160px] items-center justify-between rounded-[0.5rem] bg-[#ECECEC] px-[1.5rem] py-[0.5rem]"
          {...getToggleProps()}
        >
          <button className="text-[0.75rem] ">
            {isExpanded ? "Less Information" : "More Information"}
          </button>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="#000000"
            viewBox="0 0 256 256"
            className={`transform-gpu  duration-500 ${isExpanded ? "-rotate-180  " : "rotate-0 "}`}
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-center">
        {" "}
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
}

export default AboutQuizx;
