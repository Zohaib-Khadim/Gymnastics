import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" main w-full h-[100vh] " style={{}}>
        <div className="md:ms-16 ms-7">
          <div className="pt-7">
            <p className="text-white  hover:border-[black] font-bold border w-48 text-center py-2   hover:bg-blue-700">
              ELIT EDGE FITNESS
            </p>
          </div>
          <div className="pt-40">
            <div>
              <h3 className="text-white  text-6xl  w-48 ">LET'S</h3>
              <h3 className="text-white   text-6xl  w-48  pt-3">GET</h3>
              <h3 className="text-white   text-6xl  w-48  pt-3">MOVING</h3>
            </div>
            <p className="text-white   text-xl   w-72 mt-5  ">
              Your Journey Starts From Here
            </p>
            <p className="text-blue-700   text-xl   w-72 mt-2 ">
              Unleash Your Potential
            </p>
            <div className="mt-3">
              <button className="text-white text-sm hover:border-[black] font-bold border w-44 text-center py-2    hover:bg-blue-700">
                Start Your Journey
              </button>
              <button className="text-white text-sm ms-3 font-bold border w-44 text-center py-2    hover:bg-blue-700 hover:border-[black]">
                Discover Your Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
