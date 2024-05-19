import img from "/src/svgs/QXlogo.svg";
function Info() {
  return (
    <div>
      <div className="flex justify-center lg:justify-start lg:pl-[6%]">
        {" "}
        <img className="w-[15rem]" src={img} alt="" />
      </div>
      <div className="flex flex-col items-center text-center lg:items-start lg:px-[6%]">
        <h1 className="pb-[0.5rem] text-[2.25rem] font-bold text-[#171717] lg:text-[2.667rem]">
          Campus Ecosystem
        </h1>
        <h2 className="px-[2rem] pb-[1.375rem]  text-[1.5rem] text-[#4D4D4D] lg:max-w-[70%] lg:px-0 lg:text-start lg:text-[2.5rem]">
          where <b className="text-black">knowledge</b> intersects with{" "}
          <b className="text-black">modern</b>{" "}
          <b className="text-black">technology</b> and{" "}
          <b className="text-black">thoughtful design</b>
        </h2>
        <h3 className="pb-[4rem] text-[1.5rem] text-[#CF0804] lg:text-[2rem]">
          + forward thinking
        </h3>
      </div>
    </div>
  );
}

export default Info;
