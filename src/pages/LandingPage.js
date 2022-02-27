import React from "react";
import { Link } from "react-router-dom";
import Circle from "assets/images/Circle.png";
import Grafik from "assets/images/Grafik.png";
import Burst from "assets/images/Burst.png";

export default function LandingPage() {
  return (
    <div className="">
      <img className="fixed right-0 bottom-0 z-0" src={Burst} alt="Burst" />
      <img className="fixed left-0 bottom-0 z-0" src={Circle} alt="Circle" />

      <div className="ml-40 flex items-center justify-center">
        <div className="">
          <p className="text-red-300 text-8xl mb-6">Make and Join</p>
          <p className="text-red-300 text-8xl mb-6">Online Surveys</p>
          <p className="font-bold text-xl mb-6">
            Get rewards by participating in survey
          </p>
          <div className="w-full flex items-center justify-center">
            <Link className="text-red-300 border-2 border-black rounded-md px-4 py-2 font-bold text-xl">
              Get Started
            </Link>
          </div>
        </div>
        <div className=" z-50">
          <img src={Grafik} alt="Grafik" />
        </div>
      </div>
    </div>
  );
}
