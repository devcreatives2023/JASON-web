import React from "react";
import { icon } from "../../constants";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex uppercase justify-between p-2">
      <div className="  font-semibold text-lg ">
        <Link to="/">
          {" "}
          jason <br />/ <span className="ml-2"> o'rear </span>
        </Link>
      </div>
      <div>
        <icon.AiOutlinePlus />
      </div>
      <div className="flex flex-col  cursor-pointer ">
        <span className="w-[60px] h-[4px]  bg-black "></span>
        <span className="w-[40px] mt-3 h-[4px]  bg-black"></span>

        {/* <icon.MdOutlineShortText className="text-[60px] transition duration-[0.6]  ease-in-out  hover:text-[red]" /> */}
      </div>
    </div>
  );
};

export default Navbar;
