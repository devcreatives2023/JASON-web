import React from "react";
import { icon } from "../../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  const btn = React.useRef();
  return (
    <motion.div
      className="flex uppercase justify-between   px-2"
      initial={{ y: 0 }}
      animate={{ y: 15 }}
      transition={{ duration:1, ease: "easeIn" ,type:"spring"}}
      exit={{ y: 0 }}
    >
      <div className=" hover:text-[red] transition ease-in-out duration-[0.3s] font-semibold text-sm xl:text-lg lg:text-lg md:text-lg ">
        <Link to="/">
          jason <br />/ <span className="ml-2"> o'rear </span>
        </Link>
      </div>
      <div>
        <icon.AiOutlinePlus />
      </div>
      <div className="flex flex-col cursor-pointer">
        <span className=" transition-all duration-[0.4s] ease-in-out  hover:text-[red] text-[2rem] xl:text-[60px] lg:text-[4rem] md:text-[4rem] ">
          <Link to="link">
            <icon.CgIfDesign />
          </Link>
        </span>
      </div>
    </motion.div>
  );
};

export default Navbar;
