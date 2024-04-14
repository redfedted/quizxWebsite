function Navbar() {
  return (
    <div className="mx-auto">
      <div className="flex justify-center mt-[3.5rem] ">
        <div className="border border-1 border-[#CF0804] border-solid  text-[1.563rem] p-[0.455rem] rounded-full font-normal">
          <button className="py-[0.889rem] px-[3.406rem] bg-[#CF0804] rounded-full text-white ">
            Home
          </button>
          <button className="py-[0.889rem] px-[3.406rem]  rounded-full">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
