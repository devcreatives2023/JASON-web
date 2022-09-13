import React from "react";
import { data, icon } from "../../constants";
import { motion } from "framer-motion";

const Slides = () => {
  const [currentSlide, setCurrentSlide] = React.useState();
  const slideLength = data.slider.length;
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
    <div className="flex flex-col mt-[40px] h-[90vh] xl:h-[80vh] ">
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
      <div className=" overflow-hidden relative w-[100%]">
        {data.slider.map((item, index) => {
          return (
            <>
              <motion.div
                key={index}
                style={{ transition: "all 0.5s ease" }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "spring" }}
                exit={{ x: -100 }}
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
                        className=" h-[40vh] xl:h-[60vh] w-screen object-cover"
                        initial={{ x: 100, opacity: 0.7 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, type: "tween" }}
                        exit={{ x: -100, opacity: 0.8 }}
                      />
                    </div>

                    <div
                      className="flex flex-col xl:flex-row lg:flex-row  justify-start xl:justify-between lg:justify-between"
                      initial={{ y: 100 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 1 }}
                      exit={{ x: -100 }}
                    >
                      <div className="mt-[50px]">
                        <h1 className=" uppercase  font-semibold">(Info) </h1>
                        <div className="grid grid-cols-1  xl:grid-rows-3 w-screen xl:w-auto xl:grid-cols-3 uppercase gap-8 mt-5">
                          <p>{item.tem} </p>
                          <p> {item.city}</p>
                          <p>{item.text}</p>
                        </div>
                      </div>
                      <div className="flex -mt-[55px] xl:-mt-[15px] lg:-mt-[15px]  ml-auto">
                        <span className=" uppercase flex justify-between items-center text-gray font-semibold ">
                          <span className="mr-2 text-black text-lg">
                            <icon.MdPlayArrow />
                          </span>
                          project /
                        </span>
                        <span className="text-[4rem]   xl:text-[7rem] lg:text-[7rem] md:text-[5rem]  flex font-bold ">
                          0 <span className="text-[red]"> {currentSlide}</span>
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
