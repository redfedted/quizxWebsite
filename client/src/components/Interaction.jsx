import Groups from "./Groups";

function Interaction() {
  return (
    <>
      <div className="px-[1rem]">
        <div className="mb-[1.25rem] text-center text-[1.25rem] font-bold lg:mx-[4.5%] lg:text-start lg:text-[2.667rem] ">
          {" "}
          <h1>Discover the QuizX Difference</h1>
          <h2 className="text-[#CF0804]">Transform Your Campus Today.</h2>
        </div>
      </div>
      <div className="lg:mx-[4.5%]  lg:grid lg:grid-cols-3  lg:justify-between">
        <div>
          <Groups
            title={"Groups"}
            description={"Connect and Collaborate Anytime, Anywhere."}
          />{" "}
          <Groups
            title={"Groups"}
            description={"Connect and Collaborate Anytime, Anywhere."}
          />{" "}
          <Groups
            title={"Groups"}
            description={"Connect and Collaborate Anytime, Anywhere."}
          />{" "}
        </div>
        <div>
          <Groups
            title={"Groups"}
            description={"Connect and Collaborate Anytime, Anywhere."}
          />{" "}
          <Groups
            title={"Groups"}
            description={"Connect and Collaborate Anytime, Anywhere."}
          />{" "}
          <Groups
            title={"Groups"}
            description={"Connect and Collaborate Anytime, Anywhere."}
          />{" "}
        </div>
        <div>
          <Groups
            title={"Groups"}
            description={"Connect and Collaborate Anytime, Anywhere."}
          />{" "}
          <Groups
            title={"Groups"}
            description={"Connect and Collaborate Anytime, Anywhere."}
          />{" "}
          <Groups
            title={"Groups"}
            description={"Connect and Collaborate Anytime, Anywhere."}
          />{" "}
        </div>
      </div>
    </>
  );
}

export default Interaction;
