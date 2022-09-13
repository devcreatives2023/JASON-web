import React from "react";
import { icon } from "../../constants";
import { Link } from "react-router-dom";
const Navbar = ({text}) => {
  const btn = React.useRef();
  return (
    <div className="flex uppercase justify-between   p-2" 
     >
      <div className=" hover:text-[red] transition ease-in-out duration-[0.3s] font-semibold text-sm xl:text-lg lg:text-lg md:text-lg " >
        <Link to="/">
          jason <br />/ <span className="ml-2"> o'rear </span>
        </Link>
      </div>
      <div>
        <icon.AiOutlinePlus />
      </div>
      <div className="flex flex-col cursor-pointer">
        <span className=" transition-all duration-[0.4s] ease-in-out  hover:text-[red] text-[2rem] xl:text-[60px]">
          <Link to="link">
            <icon.CgIfDesign />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
