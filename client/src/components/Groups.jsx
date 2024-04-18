import svg from "/src/svgs/arrowdown.svg";
function Groups({ title, description }) {
  return (
    <div className="mx-[1rem] mb-[1rem] flex items-center justify-between  rounded-[0.5rem] border-[0.063rem] border-solid border-[#787878] px-[1.509rem] py-[1.05rem]">
      <div>
        <h1 className="text-[1.25rem]">{title}</h1>
        <h2 className="text-[0.75rem] text-[#696969]">{description}</h2>
      </div>
      <img src={svg} alt="" />
    </div>
  );
}

export default Groups;
