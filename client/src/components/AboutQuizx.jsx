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
        <div
          className="mb-[2.188rem]   flex items-center gap-[0.25rem] rounded-[0.5rem] bg-[#ECECEC] px-[1.5rem] py-[0.5rem]"
          {...getToggleProps()}
        >
          <button className="text-[0.75rem] ">
            {isExpanded ? "Collapse" : "View more"}
          </button>
          {isExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
          )}
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
