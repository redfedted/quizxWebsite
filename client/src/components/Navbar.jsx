function Navbar() {
  return (
    <div className="flex flex-col items-center gap-[5.437rem] mb-[2.5rem]">
      <div className="flex justify-center mt-[2rem] ">
        <div className="border border-1 border-[#CF0804] border-solid  text-[1rem] p-[0.347rem] rounded-full font-normal">
          <button className="py-[0.678rem] px-[2.364rem] bg-[#CF0804] rounded-full text-white ">
            Home
          </button>
          <button className="py-[0.678rem] px-[2.364rem]  rounded-full">
            Join Waitlist
          </button>
        </div>
      </div>
      <img src="/src/images/nobgcampus.png" alt="" />
    </div>
  );
}

export default Navbar;
