import React from "react";
import { Link } from "react-router-dom";
import { Check } from 'lucide-react';
const Pricing = () => {
  const price = [
    {
      imgUrl: "../../public/images/img7.jpg",
      title: "QUATERLY",
      pricing: "18000",
      length: 3,
    },
    {
      imgUrl: "../../public/images/img7.jpg",
      title: "HALF-YEARLY",
      pricing: "18000",
      length: 3,
    },
    {
      imgUrl: "../../public/images/img7.jpg",
      title: "YEARLY",
      pricing: "67000",
      length: 3,
    },
  ];
  return (
    <div className="h-[100vh] mt-9 ">
      <h1 className="text-center  text-2xl font-bold">
        ELIT EDGE FITNESS PLANS
      </h1>
      <div className="flex  gap-5 justify-center items-center  ">
        {price.map((ele, ind) => {
          return (
            <>

              <div className=""  key={ele.title}>
             
                  <img
                    className="w-[20rem] h-[30rem] object-fill"
                    src={ele.imgUrl}
                    alt=""
                  />
                   <div className="relative bottom-[27rem] left-6">
                  <div className=" text-blue-700">
                    <p className="text-4xl"> {ele.title}</p>
                    <h1 className="text-4xl">PAKAGES</h1>
                  </div>
                  <div className="text-white">
                    <h2 className="text-2xl">RS {ele.pricing}</h2>
                    <h2 className="text-sm">FOR{ele.length} Months</h2>
                  </div>
                </div>
                  
                </div>
                
             
            </>
          );
        })}
      </div>
       <div className="bg-white border w-[20.1rem] relative left-[8.7rem] bottom-[26.2rem] h-[18rem] ">
        <div className="flex mt-9">
        <Check className="text-blue-700 ms-5" />
        <p className="text-sm ps-5">Equipments</p>
        </div>
        <div className="flex">
        <Check className="text-blue-700 mt-2 ms-5"/>
        <p className="pt-3  text-sm ps-5">All Day Free Training </p>
        </div>
        

        <div className="flex">
        <Check className="text-blue-700 mt-2 ms-5"/>
        <p className="pt-3 text-sm ps-5">Free Restroom</p>
        </div>

        <div className="flex">
        <Check className="text-blue-700 mt-2 ms-5"/>
        <p className="pt-3 text-sm ps-5">24/7 Skilled Support </p>
        </div>

        <div className="flex"> 
        <Check className="text-blue-700 mt-2 ms-5"/>
        <p className="pt-3 text-sm ps-5">20 Days Freezing Option</p>
        </div>

        <button className="border mt-3 ms-6 text-sm bg-blue-700 text-white p-1 px-2 rounded ">
          <Link to={"/"}>Join Now</Link>
        </button>
      </div>
      <div className="bg-white border w-[20.1rem] relative left-[51.2rem] bottom-[44.2rem] h-[18rem] ">
        <div className="flex mt-9">
        <Check className="text-blue-700 ms-5" />
        <p className="text-sm ps-5">Equipments</p>
        </div>
        <div className="flex">
        <Check className="text-blue-700 mt-2 ms-5"/>
        <p className="pt-3  text-sm ps-5">All Day Free Training </p>
        </div>
        

        <div className="flex">
        <Check className="text-blue-700 mt-2 ms-5"/>
        <p className="pt-3 text-sm ps-5">Free Restroom</p>
        </div>

        <div className="flex">
        <Check className="text-blue-700 mt-2 ms-5"/>
        <p className="pt-3 text-sm ps-5">24/7 Skilled Support </p>
        </div>

        <div className="flex"> 
        <Check className="text-blue-700 mt-2 ms-5"/>
        <p className="pt-3 text-sm ps-5">20 Days Freezing Option</p>
        </div>

        <button className="border  mt-3 ms-6 text-sm bg-blue-700 text-white p-1 px-2 rounded ">
          <Link to={"/"}>Join Now</Link>
        </button>
      </div> 
    </div>
  );
};

export default Pricing;
