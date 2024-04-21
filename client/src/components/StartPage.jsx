import img2 from "/src/images/startpage2.png";
import img1 from "/src/images/startpage1.png";
function StartPage({ setStartPage }) {
  return (
    <div className="mx-[1.3rem]">
      <h1 className="mb-[5.494rem] mt-[1.791rem] text-center text-[3.401rem]  font-bold text-[#CF0804]">
        QuizX
      </h1>
      <div className="relative mb-[1.056rem]">
        {" "}
        <img src={img2} className="mt-[13.063rem] shadow-2xl" alt="" />
        <img className="absolute bottom-0 right-0 shadow-2xl" src={img1} alt="" />
      </div>
      <div className=" mb-[0.5rem] text-[2.25rem] font-bold">
        {" "}
        <h2>Introducing</h2>
        <h2 className="text-[#D2322F]">Campus Ecosystem</h2>
      </div>

      <h3 className="mb-[1.5rem] w-9/12 text-[1.5rem] leading-[28.77pxrem] opacity-75">
        Reimagine the Educational Experience for your Institution
      </h3>
      <button
        className="border-1  mb-[2.563rem]  rounded-full border-2 border-black px-[2rem] py-[0.5rem] text-[1rem]"
        onClick={() => {
          setStartPage(false);
        }}
      >
        Explore
      </button>
    </div>
  );
}

export default StartPage;
