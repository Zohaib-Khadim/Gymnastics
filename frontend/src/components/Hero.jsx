import React from "react";
import WorkOut from "../../public/images/pexels-pavel-danilyuk-6295868.jpg";
const Hero = () => {
  return (
    <>
      <div className=" text-black  flex lg:flex-row flex-col items-center   justify-center xl:gap-10 lg:gap-6 gap-4 px-[2rem]">
        <div className="md:block flex justify-center gap-6 items-center ">
          <div className=" w-[50%] md:w-full">
          <h1 className="font-bold text-2xl">TOP WORKOUT SESSION</h1>
          <p className="md:w-[30rem] mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            corrupti voluptatem necessitatibus maiores distinctio sapiente
            deleniti fugit tempore qui culpa?
          </p>
          </div>
          <div className="w-[50%] md:w-full">
          <img className="w-[29rem] h-[33.5rem] object-cover" src={WorkOut} alt="" />
          </div>
        </div>
        <div className="  ">
          <h1 className="font-bold text-2xl">FEATURED BOOTCAMPS</h1>
          <p className="w-[32rem] mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            quaerat modi deleniti quos aliquid, totam excepturi fugiat beatae
            earum similique?
          </p>
          <div className="border p-2 ">
            <h1 className="font-bold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
              eaque!
            </h1>
            <p className="w-[32rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquam
              voluptatum.
            </p>
          </div>
          <div className="border p-2 mt-5">
            <h1 className="font-bold ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
              eaque!
            </h1>
            <p className="w-[32rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquam
              voluptatum.
            </p>
          </div>
          <div className="border p-2 mt-5">
            <h1 className="font-bold mt-">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
              eaque!
            </h1>
            <p className="w-[32rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquam
              voluptatum.
            </p>
          </div>
          <div className="border p-2 mt-5">
            <h1 className="font-bold mt-">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
              eaque!
            </h1>
            <p className="w-[32rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquam
              voluptatum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
