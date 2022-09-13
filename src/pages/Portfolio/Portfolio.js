import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { icon } from "../../constants";
const Portfolio = () => {
  return (
    <motion.div
      className="bg-black xl:h-auto h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      variants={{ Infinity }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar text={<icon.AiOutlinePlus /> } link="/" bg="white" />
      <div className="font-bold uppercase text-[white] flex justify-center items-start">
        <div className=" rotate-[270deg] s] mt-[130px] xl:mt-0
         lg:mt-[100px] sm:mt-0 md:mt-[400px]">
          {/* info start */}
          <div className="flex items-start">
            <motion.div 
            className=" border-b-2 xl:w-[530px] w-[270px]  border-l flex-col  border-[#eee] ">
              <Link className=" hover:text-[red] text-left " to="/info">
                <h1 className="lg:text-[7rem] md:text-[5rem] text-[2rem] xl:text-[9rem]">
                  info
                </h1>
                <p className="uppercase pl-3 ">perosanl Info </p>
              </Link>
            </motion.div>
          </div>
          {/* info end */}

          {/* works start */}
          <div
            className="flex pr-3 border-r mr-6 hover:text-[red]
           border-b-2 border-[#eee]"
          >
            <Link to="/works">
              <h1 className="lg:text-[7rem] text-[2rem] md:text-[5rem] xl:text-[9rem]">
                works
              </h1>
              <p className="uppercase text-right">perosanl Info </p>
            </Link>
          </div>
          {/* works end */}

          {/* Email start */}
          <div className="border-l border-b-2 w-[300px] xl:w-[320px] lg:w-[320px] pr-[40px]">
            <div className=" text-left hover:text-[red]">
              <h1 className="lg:text-[7rem] text-[2rem] md:text-[5rem] xl:text-[9rem]">
                <a href="mailto:abraralrawi9972gmail.com">email</a>
              </h1>
              <p className="uppercase pl-3">perosanl Info </p>
            </div>
          </div>
          {/* start end */}

        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
