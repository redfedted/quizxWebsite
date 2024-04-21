import { useEffect, useState } from "react";
import svg1 from "/src/svgs/down.svg";
import svg2 from "/src/svgs/up.svg";
import { useCollapse } from "react-collapsed";

function Groups({ title, description }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div
      {...getToggleProps()}
      className={`mx-[1rem] mb-[1rem] flex items-start ${isExpanded && "bg-[#393939]"}  transform-gpu justify-between rounded-[0.5rem] border-[0.063rem] border-solid border-[#787878] px-[1.509rem] pt-[1.05rem]  duration-300`}
    >
      <div>
        <h1 className={`text-[1.25rem] ${isExpanded && "text-white"}`}>
          {title}
        </h1>
        <h2
          className={`pb-[1.063rem] text-[0.75rem] text-[#696969] ${isExpanded && "text-[#C5C5C5]"}`}
        >
          {description}
        </h2>{" "}
        <div {...getCollapseProps()}>
          <h1
            className={` pb-[1rem] text-[0.875rem] ${isExpanded && "text-white"}`}
          >
            Groups bring the classroom to you, wherever you are. It’s a
            dedicated space for teachers and students to communicate, share
            resources, and support each other’s learning journey. Simple,
            effective, and always accessible, Groups ensures that education
            doesn’t end at the classroom door—it’s where the extended learning
            community thrives.
          </h1>
        </div>
      </div>
      <div className="pt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill={isExpanded ? "#ffffff" : "#383838"}
          viewBox="0 0 256 256"
          className={`transform-gpu  duration-500 ${isExpanded ? "-rotate-180  " : "rotate-0 "}`}
        >
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>

        {/* {isExpanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#383838"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        )} */}
      </div>
    </div>
  );
}

export default Groups;
