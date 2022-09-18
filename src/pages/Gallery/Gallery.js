import React from "react";

import { motion } from "framer-motion";
import { Navbar } from "../../components";
import { images } from "../../constants";


const Gallery = () => {
  return (
    <motion.div>
      <div>
        <Navbar
          text="index"
          link="/works"
          text2=" / Gallery"
          link2="/gallery"
          bg="black"
        />
      </div>

      <div className="p-[1rem] mt-[60px] xl:mt-[80px]">
        <ul className="grid  grid-cols-5  grid-rows-4 gap-1 xl:gap-4">
          {/* fisrt row */}
          <li className="row-span-4 g-[red]  row-end-1 ">
            <img
              src={images.b1}
              className="row-span-4 xl:h-[475px] lg:h-[470px]  h-[255px]  object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0"
            />
            <p className=""></p>
          </li>
          <li className=" row-span-2">
            <img
              src={images.b2}
              className="xl:h-[240px] lg:h-[230px] h-[120px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0 "
            />
          </li>
          <li className="row-span-4">
            <img
              src={images.b3}
              className="xl:h-[470px] lg:h-[470px]  h-[255px]  object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0"
            />
          </li>
          <li className=" row-span-2">
            <img
              src={images.b4}
              className="xl:h-[240px] lg:h-[250px] h-[130px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0"
            />
          </li>
          <li className=" row-span-2">
            <img
              src={images.b5}
              className="xl:h-[240px] lg:h-[220px] h-[120px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0"
            />
          </li>

          {/* second row */}
          <li className=" row-span-2 ">
            <img
              src={images.b6}
              className="xl:h-[200px] lg:h-[200px] h-[120px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0"
            />
          </li>
          <li className=" row-span-4  ">
            <img
              src={images.b7}
              className="xl:h-[470px] lg:h-[470px] h-[250px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0"
            />
          </li>
          <li className=" row-span-2 ">
            <img
              src={images.b1}
              className="xl:h-[200px] lg:h-[200px] h-[118px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0"
            />
          </li>
          <li className=" row-span-4 ">
            <img
              src={images.b6}
              className="xl:h-[470px] lg:h-[470px] h-[250px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0"
            />
          </li>
          <li className=" row-span-4 ">
            <img
              src={images.b3}
              className="xl:h-[470px] lg:h-[470px] h-[250px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0"
            />
          </li>
          <li className=" row-span-2 ">
            <img
              src={images.b2}
              className="xl:h-[240px] lg:h-[200px] h-[125px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0"
            />
          </li>
          <li className=" row-span-4 ">
            <img
              src={images.s1}
              className="xl:h-[460px] lg:h-[470px]  h-[250px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0"
            />
          </li>
          <li className=" row-span-2 ">
            <img
              src={images.s3}
              className="xl:h-[200px] lg:h-[200px]  h-[120px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0"
            />
          </li>
          <li className="row-span-2 ">
            <img
              src={images.s2}
              className="xl:h-[200px] lg:h-[200px]  h-[120px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0"
            />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Gallery;
