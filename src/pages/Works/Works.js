import React, { useRef } from "react";
import { Navbar } from "../../components";
import { data } from "../../constants";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

// motion for add div which will get the animation or transition
// useScroll select the method which transition will work and also we use ScrollY and scrollY
// to select transition with any direction (x or y)
//useVelocity decide the velocity of update
// useTrasnform to create chain of motion values and us ewith useMotionvalue()
// useAnimationFrame to do animation with one render and complete animation with callback function

const Works = ({ children, baseVelocity = 40 }) => {
  // initial value
  const basex = useMotionValue(0);
  // direction of scroll
  const { scrollY } = useScroll();
  // velocitt of animation with scroll
  const scrollVelocity = useVelocity(scrollY);
  // type of animation with useSpring ==>(add smaooth move )
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 600,
  });

  // range of
  const velocityFactore = useTransform(smoothVelocity, [1, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(basex, (v) => `${wrap(-20, -45, v)}%`);
  // number less or greate tha 1
  const directionFactore = useRef(1);
  const prevT = useRef(0);
  useAnimationFrame((t) => {
    if (!prevT.current) {
      prevT.current = t;
    }
    const timeDelate = t - prevT.current;
    let moveBy = directionFactore.current * baseVelocity * (timeDelate / 5000);

    if (velocityFactore.get() < 0) {
      directionFactore.current = -1;
    } else if (velocityFactore.get() > 0) {
      directionFactore.current = 1;
    }
    moveBy += directionFactore.current * moveBy * velocityFactore.get();
    basex.set(basex.get() + moveBy);
    prevT.current = t;
  });

  return (
    <>
      <div>
        <Navbar text="index" link="/works" text2=" / Gallery" link2="/gallery" bg="black" />
      </div>

      <div className="flex flex-col mt-0 xl:mt-10 lg:mt-10 p-[1rem] cursor-pointer">
        {data.works.map((item, index) => {
          return (
            <div key={index} className="mt-10 border-b-2 pb-10 pt-4 px-4">
              <p className=" uppercase text-sm"> {item.span}</p>
              <p className="xl:text-2xl w-[90%] mt-0 xl:-mt-[50px] ml-0 xl:-ml-[10px] font-bold uppercase">
                {item.name}
              </p>

              <div className="grid grid-cols-2 uppercase  text-[10px]">
                <div className="flex flex-col xl:flex-row justify-between">
                  <p className="flex  flex-col">
                    <span className="hidden xl:visible lg:visible md:visible"> (clients)</span>
                     <span>{item.clients} </span>
                  </p>
                  <p className="flex flex-col  ">
                    <span className="hidden xl:visible lg:visible md:visible">(Location)</span>
                    <span>{item.location}</span>
                  </p>
                  <p className="flex flex-col  ">
                    <span className="hidden xl:visible lg:visible md:visible">(gps)</span>
                    <span>{item.gps}</span>
                  </p>
                  <p className="flex flex-col  ">
                    <span className="hidden xl:visible lg:visible md:visible">(year)</span>
                    <span>{item.year}</span>
                  </p>
                  <p className="flex flex-col  ">
                    <span className="hidden xl:visible lg:visible md:visible">(publication)</span>
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
