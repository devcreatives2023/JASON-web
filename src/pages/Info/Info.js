import React from "react";
import { Navbar } from "../../components";
import { images } from "../../constants";

const Info = () => {
  const data = [
    { name: "( phone )", link: "+4159678184" },
    { name: "( email )", link: " studio@jasonrear.com" },
    {
      name: " ( address )",
      link: "34 CERVANTES BLVD. SAN s FRANCISCO, CA 94123",
    },
    { name: "( social )", link: "instagram" },
    { name: "( site credit )", link: "shiftwalk" },
  ];

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className=" mt-5 grid  grid-cols-2  -gap-[60px] p-[2rem] ">
        {/* text left div start */}
        <div className=" flex flex-col ">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col leading-7 uppercase tracking-wider items-start">
              <h1 className="ml-2 font-semibold mb-2">(Clients)</h1>
              <p className="text-[12px]">DILLER SCOFIDIO + RENFRO OMA</p>
              <p className="text-[12px]">
                pellt clarkee architects <br /> obermoser architects
              </p>
              <span className="text-[red] text-[14px] mt-4 hover:text-gray cursor-pointer">
                + EXPAND{" "}
              </span>
            </div>
            <div className="flex flex-col leading-7 uppercase  items-start">
              <h1 className="ml-2 font-semibold mb-2">(publication)</h1>
              <p className="text-[12px]">DILLER SCOFIDIO + RENFRO OMA</p>
              <p className="text-[12px]">
                pellt clarkee architects <br /> obermoser architects
              </p>
              <span className="text-[red] text-[14px] mt-4 hover:text-gray cursor-pointer">
                + EXPAND
              </span>
            </div>
          </div>
          {/* img */}
          <div className="relative mt-5">
            <img src={images.info} className='w-90' />
            <p
              className="absolute text-[black]  
              uppercase font-bold
               -right-[19rem]  tracking-wide z-10  scale-[-1] text-[16rem] -top-[0px] 
               rotate-[90deg]"
            >
              Info
            </p>
          </div>
        </div>
        {/* text left div end */}

        {/* text right div start */}
        <div className=" border-l-4  pl-7 ml-[90px]">
        <div className="  px-5 flex flex-col ">
          <h1 className="mr-auto ml-2 font-semibold mb-2 uppercase ">
            ( Biography )
          </h1>
          <p>
            Known for his keen eye and rigor, Jason spends time with clients
            from the outset, absorbing their vision and using it to fuel his
            creativity behind the lens. Every shot is meticulously curated to
            tell a story of the relationship between building, nature, and human
            experience.
          </p>
          <div className="flex flex-col text-sm 
          leading-8 items-start justify-start mr-auto mt-[50px]">
            {data.map((items, index) => {
                return (
                <div className="mb-[10px] " key={index}>
                  <p className=" uppercase"> {items.name} </p>
                  <p className=" uppercase ml-10 cursor-pointer font-semibold border-b-[1px] hover:text-[red] ">
                    {items.link}
                  </p>
                </div>
              );
            })}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
