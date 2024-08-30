import React, { useState } from "react";
import { toast } from "react-toastify";
import bmiImage from "../../public/images/bmi.jpg";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please Enter Valid Height, Weight, and Gender");
      return;
    }

    const heightInMetres = height / 100;
    const bmiValue = (weight / (heightInMetres * heightInMetres)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning("You Are Underweight. Please Get Advice from a Health Specialist...");
    } else if (bmiValue >= 18.5 && bmiValue < 24.5) {
      toast.success("You Have a Normal Weight. Please Maintain Your Body Weight...");
    } else if (bmiValue >= 25 && bmiValue < 29.5) {
      toast.warning("You Are Overweight. Please Get Advice from a Health Specialist...");
    } else {
      toast.warning("You Are in the Obese Range. Please Get Advice from a Health Specialist...");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-gray-500 min-h-screen flex flex-col items-center px-4 md:px-8 lg:px-16 py-6">
      <h1 className="text-3xl md:text-4xl font-bold pt-8 md:pt-16 text-white text-center">
        BMI CALCULATOR
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-7 gap-4 md:gap-10">
        <form className="w-full md:w-[30rem] px-4 md:px-0" onSubmit={calculateBmi}>
          <div className="mb-5">
            <label className="text-sm text-white">Height (cm)</label><br />
            <input
              className="border-b-2 mt-2 w-full outline-none bg-inherit text-white placeholder-white"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
              placeholder="Enter Height"
            />
          </div>
          <div className="mb-5">
            <label className="text-sm text-white">Weight (kg)</label><br />
            <input
              className="border-b-2 mt-2 w-full outline-none bg-inherit text-white placeholder-white"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
              placeholder="Enter Weight"
            />
          </div>
          <div className="mb-5">
            <label className="text-sm text-white">Gender</label><br />
            <select
              className="border-b-2 mt-2 w-full outline-none appearance-none bg-inherit text-sm text-white"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button className="w-full bg-white text-blue-700 p-3 rounded mt-5 mb-7" type="submit">
            Calculate BMI
          </button>
        </form>
        <div className="flex items-center justify-center w-full md:w-[32rem] h-[25rem]">
          <img className="w-full h-full object-cover" src={bmiImage} alt="BMI" />
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
