import svg from "/src/svgs/Handshake.svg";
function Contact() {
  return (
    <div className="mb-[1.875rem] lg:mb-[4.188rem] mt-[2.563rem] flex flex-col items-center gap-[1rem] bg-[#CF0804] px-[2.959rem] py-[1.235rem] text-center lg:flex-row lg:justify-center lg:gap-[5%] lg:px-[1.25rem] ">
      <div className="border-1 flex gap-[0.25rem] rounded-full border border-solid border-black bg-white px-[1.875rem] py-[0.734rem] text-[0.684rem] lg:text-[1rem]">
        <img src={svg} alt="" />
        <button className="">Human assistance</button>
      </div>
      <h1 className="text-[1.25rem] lg:text-[1.333rem] lg:max-w-[55%] lg:text-start text-white">
        Connect with our CEO for personalized guidance on integrating QuizX into
        your educational ecosystem.
      </h1>
    </div>
  );
}

export default Contact;
