import svg from "/src/svgs/Handshake.svg";
function Contact() {
  return (
    <div className="flex flex-col gap-[1rem] items-center text-center bg-[#C20019] py-[1.235rem] px-[2.959rem] mb-[6.672rem]">
      <div className="flex gap-[0.25rem] bg-white rounded-full text-[0.684rem] px-[1.875rem] py-[0.734rem] border border-solid border-1 border-black">
        <img src={svg} alt="" />
        <button className="">Human assistance</button>
      </div>
      <h1 className="text-white text-[1.25rem]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta
        assumenda ex ipsa nostrum aliquid repellat enim eum nemo tempora.
      </h1>
    </div>
  );
}

export default Contact;
