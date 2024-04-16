function Card1({ h1, h2 }) {
  return (
    <div className="mx-[1rem] mb-[1rem] flex min-h-[22.5rem] flex-col justify-center gap-[1.719rem] rounded-[0.906rem] bg-[#C20019]  px-[1rem] ">
      <h1 className="text-[2.25rem] font-semibold text-white">{h1}</h1>
      <h2 className="text-[1.5rem] font-thin text-white w-8/12" >{h2}</h2>
    </div>
  );
}

export default Card1;
