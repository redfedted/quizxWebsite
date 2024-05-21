import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

function JoinWaitlist() {
  return (
    <div>
      {" "}
      <Navbar home={"Join"} />
      <div className="lg:mx-auto  lg:flex lg:items-center lg:justify-center lg:gap-[8rem]">
        <div className="hidden text-[4rem] font-bold lg:flex ">
          <h1>
            Join <br /> Waitlist{" "}
          </h1>
        </div>
        <div className="mx-[1.2rem] mb-[4.5rem] flex flex-col items-center rounded-3xl border-2 border-solid border-black py-[1.74rem] lg:mx-0   lg:w-7/12 ">
          <h1 className="pb-[1.74rem] text-[2rem] font-medium text-[#CF0804] lg:hidden lg:self-start lg:text-[3.556rem]">
            Join Waitlist
          </h1>
          <form
            className="flex w-full flex-col gap-[0.73rem] px-[1.1rem] text-white lg:gap-[1.5rem]  lg:px-[1.63rem]"
            action="#"
          >
            <input
              className="rounded-xl text-[#4d4d4d]  bg-slate-100 py-[0.85rem] pl-[1.31rem] lg:h-[5.655rem] lg:rounded-[1.556rem] lg:pl-[2.75rem] lg:text-[2rem]"
              type="text"
              placeholder="Name"
            />
            <input
              className="rounded-xl text-[#4d4d4d] bg-slate-100  py-[0.85rem] pl-[1.31rem] lg:h-[5.655rem] lg:rounded-[1.556rem] lg:pl-[2.75rem] lg:text-[2rem]"
              type="text"
              placeholder="Email"
            />
            <input
              className="rounded-xl text-[#4d4d4d] bg-slate-100  py-[0.85rem] pl-[1.31rem] lg:h-[5.655rem] lg:rounded-[1.556rem] lg:pl-[2.75rem] lg:text-[2rem]"
              type="text"
              placeholder="Name of the institution"
            />
            <input
              className="flexs flex text-[#4d4d4d] rounded-xl  bg-slate-100  pb-[16.51rem] pl-[1.31rem] pt-[0.85rem] lg:h-[22.809rem] lg:rounded-[1.556rem] lg:pl-[2.75rem]  lg:text-[2rem]"
              type="text"
              placeholder="Enter the message"
            />
            <button className="rounded-[0.75rem] bg-[#262626] py-2 text-xl font-medium lg:rounded-[1.556rem] lg:py-[1.75rem] lg:text-[2rem]">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default JoinWaitlist;
