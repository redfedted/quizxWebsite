import { useState } from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

function DeleteSection() {
  const [submit, SetSubmit] = useState(false);
  return (
    <div>
      {window.scrollTo(0, 0)}
      {submit ? (
        <div>
          <h1 className="mx-6 text-xl text-center py-52 lg:text-5xl ">
            An email will be sent for confirmation
          </h1>
        </div>
      ) : (
        <div className="py-32 lg:py-32">
          <form
            onSubmit={() => {
              SetSubmit(true);
            }}
            className="flex flex-col items-center w-10/12 px-4 py-8 mx-auto border border-black border-solid rounded-xl lg:w-4/12"
          >
            <h1 className="mb-4 text-xl font-light lg:text-2xl lg:mb-6">
              Delete Profile
            </h1>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="mb-2 w-full rounded-lg bg-[#F1F5F9] px-4 lg:px-6 py-2 text-xs  lg:text-lg lg:mb-4 focus:text-black text-[#879FAF] "
            />
            <button className="w-full px-2 py-2 text-xs text-white bg-black rounded-lg lg:text-lg">
              Submit
            </button>
          </form>
        </div>
      )}

      <Contact />
      <Footer />
    </div>
  );
}

export default DeleteSection;
