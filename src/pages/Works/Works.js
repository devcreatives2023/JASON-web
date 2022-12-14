import React from "react";
import { Navbar } from "../../components";
import { data } from "../../constants";
import { motion } from "framer-motion";

const Works = () => {
  // motion for add div which will get the animation or transition
  // useScroll select the method which transition will work and also we use ScrollY and scrollY
  // to select transition with any direction (x or y)
  //useVelocity decide the velocity of update
  // useTrasnform to create chain of motion values and us ewith useMotionvalue()
  // useAnimationFrame to do animation with one render and complete animation with callback function
  return (
    <>
      <div>
        <Navbar
          text="index"
          link="/works"
          text2=" / Gallery"
          link2="/gallery"
          bg="black"
        />
      </div>

      <div className="flex flex-col mt-10 xl:mt-10 lg:mt-10 xl:p-[1rem] cursor-pointer">
        {data.works.map((item, index) => {
          return (
            <div key={index} className="xl:mt-10 border-b-2 pb-10 pt-4 px-4">
              <p className=" uppercase text-sm xl:text-lg"> {item.span}</p>
              <motion.p
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 10, opacity: 1 }}
                exit={{ y: -40 }}
                transition={{ type: "spring" }}
                className="xl:text-2xl mt-3 ml-0 xl:-ml-[15px] leading-[80%] m-[20px] xl:mb-[50px] 
              font-bold uppercase"
              >
                {item.name}
              </motion.p>

              <div className="grid grid-cols-2 uppercase  text-[10px] xl:text-sm lg:text-lg md:text:sm">
                <div className="flex flex-col xl:flex-row justify-between">
                  <p className="flex  flex-col">
                    <span className="hidden xl:inline-block lg:inline-block md:inline-block">
                      (clients)
                    </span>
                    <span>{item.clients} </span>
                  </p>
                  <p className="flex flex-col  ">
                    <span className="hidden xl:inline-block lg:inline-block md:inline-block">
                      (Location)
                    </span>
                    <span>{item.location}</span>
                  </p>
                  <p className="flex flex-col  ">
                    <span className="hidden xl:inline-block lg:inline-block md:inline-block">
                      (gps)
                    </span>
                    <span>{item.gps}</span>
                  </p>
                  <p className="flex flex-col  ">
                    <span className="hidden xl:inline-block lg:inline-block md:inline-block">
                      (year)
                    </span>
                    <span>{item.year}</span>
                  </p>
                  <p className="flex flex-col  ">
                    <span className="hidden xl:inline-block lg:inline-block md:inline-block">
                      (publication)
                    </span>
                    <span className="text-3">{item.publication}</span>
                  </p>
                </div>
              </div>
              <div></div>

              <div className="flex mt-5 ">
                {item.img.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="flex px-1"
                      // style={{ x }}
                      transition={{ repeat: Infinity }}
                    >
                      <motion.img
                        src={item.img1}
                        className="w-[250px]
                        transition-all ease-in-out duration-[2]  grayscale-[100%] hover:grayscale-0  object-cover"
                      />
                    </motion.div>
                  );
                })}{" "}
              </div>
            </div>
          );
        })}

        <div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Works;
