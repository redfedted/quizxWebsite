import img from "/src/images/nobgcampus.png";

function Navbar() {
  return (
    <div className="mb-[2.5rem] flex flex-col items-center gap-[5.437rem]">
      <div className="mt-[2rem] flex justify-center ">
        <div className="border-1 rounded-full border border-solid  border-[#CF0804] p-[0.347rem] text-[1rem] font-normal">
          <button className="rounded-full bg-[#CF0804] px-[2.364rem] py-[0.678rem] text-white ">
            Home
          </button>
          <button className="rounded-full px-[2.364rem]  py-[0.678rem]">
            Join Waitlist
          </button>
        </div>
      </div>
      <img src={img} alt="" />
    </div>
  );
}

export default Navbar;
