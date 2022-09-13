import React from "react";
import { Link } from "react-router-dom";
import { LinksNavbar } from "../../components";
const Portfolio = () => {
  return (
    <div className="bg-black xl:h-auto h-screen" >
      <LinksNavbar />
      <div
        className="font-bold uppercase text-[white] flex justify-center items-start">
        <div className=" rotate-[270deg] mt-[130px] xl:mt-0 lg:mt-0 sm:mt-0">

            {/* info start */}
          <div className="flex items-start">
            <div className=" border-b-2 xl:w-[530px] w-[270px]  border-l flex-col  border-[#eee] ">
              <Link   className=" hover:text-[red] text-left " to="/info">
                <h1 className="lg:text-[7rem] text-[2rem] xl:text-[9rem]"> info</h1>
                <p className="uppercase pl-3 ">perosanl Info </p>
              </Link>
            </div>
          </div>
          {/* info end */}

          {/* works start */}
          <div className="flex pr-3 border-r mr-6 hover:text-[red]
           border-b-2 border-[#eee]">
              <Link to="/works">
                <h1 className="lg:text-[7rem] text-[2rem] xl:text-[9rem]">works</h1>
                <p className="uppercase text-right">perosanl Info </p>
              </Link>
          </div>
          {/* works end */}

          {/* Email start */}
          <div className="border-l w-[300px] xl:w-[320px] lg:w-[320px] pr-[40px] hover:text-[red]">
            <div className=" border-b-2 text-left ">
              <h1 className="lg:text-[7rem] text-[2rem] xl:text-[9rem]">
                <a href="mailto:abraralrawi9972gmail.com">email</a>
              </h1>
              <p className="uppercase pl-3">perosanl Info </p>
            </div>
          </div>
          {/* start end */}


        </div>
      </div>
    </div>
  );
};

export default Portfolio;
