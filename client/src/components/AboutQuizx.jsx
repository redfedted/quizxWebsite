import svg from "/src/svgs/arrow.svg";

function AboutQuizx({ heading, description, imgUrl }) {
  return (
    <div className="my-[2rem]">
      <div className="mx-[1.134rem] flex flex-col items-start gap-[1rem]">
        <h1 className="w-9/12 text-[1.5rem] font-black">{heading}</h1>
        <h2 className="w-9/12 text-[1rem]">{description}</h2>
        <div className="flex  gap-[0.25rem] rounded-[0.5rem]  bg-[#ECECEC] px-[1.5rem] py-[0.5rem]">
          <button className="text-[0.75rem]">View more</button>
          <img src={svg} alt="" />
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
