import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../constants";
import { motion } from "framer-motion";

const Slides = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slideLength = data.slider.length;
  //   auto move
  const autoscroll = true;
  let slideInterval = 0;
  const intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const previus = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };
  React.useEffect(() => {
    setCurrentSlide(0);
  }, []);
  return (
    <div className="flex flex-col mt-[40px] ">
      {/* btns slide */}
      <div className="flex justify-between text-gray">
        <button className="uppercase m-1 hover:text-black" onClick={previus}>
          Previus
        </button>

        <button className=" uppercase m-1 hover:text-black" onClick={nextSlide}>
          Next
        </button>
      </div>
      {/* slider */}
      <div className=" overflow-hidden relative w-[100%]  object-contain">
        {data.slider.map((item, index) => {
          return (
            <>
              <motion.div
                key={index}
                style={{ transition: "all 0.5s ease" }}
                className={
                  index === currentSlide
                    ? " opacity-1 translate-x-0 "
                    : "absolute top-0 left-0 w-[100%] h-[100%] opacity-0 "
                }
              >
                {index === currentSlide && (
                  <>
                    <div>
                      <motion.img
                        src={item.img}
                        className=" h-[60vh] w-screen object-cover"
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="mt-[50px]">
                        <h1 className=" uppercase  font-semibold">(Info) </h1>
                        <div className="grid grid-cols-3 gap-8 mt-5">
                          <p>{item.tem} </p>
                          <p> {item.city}</p>
                          <p>{item.text}</p>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="m-10 uppercase text-gray font-semibold mt-[100px]">
                          project /
                        </span>
                        <span className="text-[7rem] flex font-bold ">
                          0{currentSlide}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Slides;
