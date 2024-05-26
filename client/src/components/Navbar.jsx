import { useEffect, useState } from "react";
// import img from "/src/images/nobgcampus.png";
import img from "/src/svgs/QXlogo.svg";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const tabs = [
  { name: "Home", color: "#CF0804" },
  { name: "Join Waitlist", color: "#CF0804" },
];

const duration = 0.1;

function Navbar({ home }) {
  const [selected, setSelected] = useState(0);
  const [click, setClick] = useState("Home");
  const [formerColor, setFormerColor] = useState(tabs[0].color);
  const navigate = useNavigate();

  useEffect(() => {
    setClick(home);
  }, [home]);

  return (
    <>
      {/* <div className="mb-[2.5rem] flex flex-col gap-[5.437rem]    lg:mb-[2.375rem]">
        <div className="mt-[2rem] flex  justify-center ">
          <div className="border-1 rounded-full border border-solid  border-[#CF0804] px-[0.5rem] py-[0.9rem] text-[1rem] font-normal">
            <Link
              to="/home"
              onClick={() => {
                setClick("Home");
              }}
              // className={`transform-gpu rounded-full   bg-[#CF0804] px-[2.364rem] py-[0.678rem]  text-white duration-700 lg:px-[2.25rem] lg:py-[0.7rem]`}
              className={`transform-gpu rounded-full   duration-700 ${click == "Home" ? "bg-[#CF0804] text-white " : "bg-white"} px-[2.364rem] py-[0.678rem] lg:px-[2.25rem] lg:py-[0.7rem]`}
            >
              Home
            </Link>

            <Link
              to="/joinwaitlist"
              onClick={() => {
                setClick("Join");
              }}
              // className={`transform-gpu  rounded-full bg-[#CF0804] px-[2.364rem] py-[0.678rem]   text-white   duration-700 lg:px-[2.25rem]  lg:py-[0.7rem]`}
              className={`transform-gpu  rounded-full duration-700 ${click == "Join" ? "bg-[#CF0804] text-white  " : "bg-white"} px-[2.364rem]   py-[0.678rem] lg:px-[2.25rem]  lg:py-[0.7rem]`}
            >
              {" "}
              Join Waitlist
            </Link>
          </div>
        </div>
      </div> */}
      {/* <div style={containerStyle}>
        <motion.div
          style={tabStyle}
          initial={{ color: click == "Home" ? "#fff" : "#CF0804" }}
          animate={{ color: click == "Home" ? "#fff" : "#CF0804" }}
          transition={{ duration }}
          onTap={() => {
            setSelected(0);
          }}
          onClick={() => {
            setClick("Home");
          }}
        >
          <span style={{ position: "relative", zIndex: 1 }}>Home</span>
          <motion.div
            style={selectionStyle}
            layoutId="selected"
            initial={{ backgroundColor: click == "Home" ? "#CF0804" : "#fff" }}
            animate={{ backgroundColor: click == "Home" ? "#CF0804" : "#fff" }}
            transition={{ duration }}
          />
        </motion.div>{" "}
        <motion.div
          style={tabStyle}
          initial={{ color: click == "Join" ? "#fff" : "#CF0804" }}
          animate={{ color: click == "Join" ? "#fff" : "#CF0804" }}
          transition={{ duration }}
          onTap={() => {
            setSelected(1);
          }}
          onClick={() => {
            setClick("Join");
          }}
        >
          <span style={{ position: "relative", zIndex: 1 }}>Join Waitlist</span>
          <motion.div
            style={selectionStyle}
            layoutId="selected"
            initial={{ backgroundColor: click == "Join" ? "#CF0804" : "#fff" }}
            animate={{ backgroundColor: click == "Join" ? "#CF0804" : "#fff" }}
            transition={{ duration }}
          />
        </motion.div>
      </div> */}{" "}
      <div className="mb-[2.5rem] flex flex-col gap-[5.437rem]    lg:mb-[2.375rem]">
        <div className="mt-[2rem] flex  justify-center ">
          <div className="border-1 flex justify-center rounded-full  border border-solid  border-[#CF0804] px-[0.5rem]  py-[0.3rem]  text-[1rem] font-normal">
            {tabs.map(({ name, color }, i) => (
              <motion.div
                style={tabStyle}
                key={i}
                initial={{ color: i === selected ? "#fff" : "#222" }}
                animate={{ color: i === selected ? "#fff" : "#222" }}
                transition={{ duration }}
                onTap={() => {
                  setFormerColor(tabs[selected].color);
                  setSelected(i);
                }}
              >
                <Link
                  to={i === 0 ? "/home" : "/joinwaitlist"}
                  style={{ position: "relative", zIndex: 1 }}
                  className={`   px-[1rem] py-[10rem]    `}
                >
                  {name}
                </Link>
                {i === selected && (
                  <motion.div
                    style={selectionStyle}
                    layoutId="selected"
                    initial={{ backgroundColor: formerColor }}
                    animate={{ backgroundColor: color }}
                    transition={{ duration }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;

const tabStyle = {
  height: 40,
  position: "relative",
  padding: "10px 22px",
  paddingBottom: "33px",
  cursor: "pointer",
};

const selectionStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  borderRadius: 50,
  top: 0,
  left: 0,
};
