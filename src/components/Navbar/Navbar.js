import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { icon } from "../../constants";
const Navbar = ({ text, link, text2, link2, bg }) => {
  const btn = React.useRef();
  return (
    <motion.div
      className="flex uppercase justify-between  px-2"
      initial={{ y: 0 }}
      animate={{ y: 15 }}
      transition={{ duration: 1, ease: "easeIn", type: "spring" }}
      exit={{ y: 0 }}
      style={{ color: bg }}
    >
      <div className=" hover:text-[red] transition ease-in-out duration-[0.3s] font-semibold text-sm xl:text-lg lg:text-lg md:text-lg ">
        <Link to="/">
          jason <br />/ <span className="ml-2"> o'rear </span>
        </Link>
      </div>
      <div className=" text-[10px] xl:text-[16px] lg:text-[12px] md:text-[12px]">
        {/* <icon.AiOutlinePlus /> */}
        <Link to={link}> {text} </Link>
        {text2 && link2 ? (
          <Link to={link2} className="text-[gray] hover:text-black">
            {text2}{" "}
          </Link>
        ) : null}
      </div>
      <div className="flex flex-col cursor-pointer">
        <motion.span
        whileHover={{
          scale: 1.1
        }}
        className=" transition-all duration-[0.4s] ease-in-out  hover:text-[red] text-[2rem] xl:text-[60px] lg:text-[4rem] md:text-[4rem] ">
          <Link to="/link">
            <icon.CgIfDesign />
          </Link>
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Navbar;
