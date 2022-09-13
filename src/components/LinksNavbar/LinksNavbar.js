import React from "react";
import { icon } from "../../constants";
import { Link } from "react-router-dom";
const LinksNavbar = () => {
  const btn = React.useRef();
  return (
    <div className="text-[white] px-2 p-2 flex uppercase justify-between  ">
      <div className=" hover:text-[red] transition ease-in-out duration-[0.3s] font-semibold text-lg ">
        <Link to="/">
          jason <br />/ <span className="ml-2"> o'rear </span>
        </Link>
      </div>
      <div>
        <icon.AiOutlinePlus />
      </div>
      <div className="flex flex-col cursor-pointer">
        <span className=" transition-all duration-[0.4s] ease-in-out  hover:text-[red] text-[2rem] xl:text-[60px] lg:text-[4rem] md:text-[4rem]">
          <Link to="/link">
            <icon.CgIfDesign />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LinksNavbar;
