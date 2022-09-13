import React from "react";
import { Navbar } from "../../components";
import { images } from "../../constants";
const Gallery = () => {
  return (
    <div>
      <div>
        <Navbar
          text="index"
          link="/works"
          text2=" / Gallery"
          link2="/gallery"
          bg="black"
        />
      </div>

      <div className="p-[1rem] mt-[80px]">
        <ul className="grid  grid-cols-5  grid-rows-4 gap-4">
       {/* fisrt row */}
          <li className="row-span-4 g-[red]  row-end-1 ">
            <img src={images.b1}  className='row-span-4 h-[475px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0' /> 
        </li>
          <li className=" row-span-2">
            <img  src={images.b2}  className='h-[230px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0 ' /> 
        </li>
          <li className="row-span-4">
        <img  src={images.b3}  className='h-[470px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0' /> 
        </li>
          <li className=" row-span-2">
        <img  src={images.b4}  className='h-[250px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0' />
        </li>
          <li className=" row-span-2">
        <img  src={images.b5}  className='h-[220px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0' />
        </li>

          {/* second row */}          
          <li className=" row-span-2 "><img  src={images.b6}  className='h-[200px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0' /> </li>
          <li className=" row-span-4  "><img  src={images.b7}  className='h-[470px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0' /> </li>
          <li className=" row-span-2 "><img  src={images.b1}  className='h-[200px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0' /> </li>
          <li className=" row-span-4 "><img  src={images.b6}  className='h-[470px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0' /> </li>
          <li className=" row-span-4 "><img  src={images.b3}  className='h-[470px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0' /> </li>
          <li className=" row-span-2 "><img  src={images.b2}  className='h-[200px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0' /> </li>
          <li className=" row-span-4 "><img  src={images.s1}  className='h-[470px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0' /> </li>
          <li className=" row-span-2 "><img  src={images.s3}  className='h-[200px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0' /> </li>
          <li className="row-span-2 "><img   src={images.s2} className='h-[200px] object-cover  transition-all duration-[0.5s] cursor-pointer grayscale-[100%] hover:grayscale-0' /> </li>
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
