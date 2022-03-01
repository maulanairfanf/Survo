import React from "react";
import { Link } from "react-router-dom";
import FormRegister from "parts/FormRegister";
import Google from "assets/images/Google.png";
import Vector1 from "assets/images/Vector1.png";
import Vector2 from "assets/images/Vector2.png";
import Vector3 from "assets/images/Vector3.png";
import Vector4 from "assets/images/Vector4.png";

export default function Register() {
  return (
    <div className="">
      <img className="fixed top-20 left-0" src={Vector1} />
      <img className="fixed top-20 right-0 " src={Vector2} />
      <img className="fixed right-0 bottom-0" src={Vector3} />
      <img className="fixed left-0 bottom-0" src={Vector4} />

      <div className="flex flex-col container mx-auto items-center justify-center">
        <div className="w-2/4 border rounded-lg shadow-xl flex flex-col py-10">
          <h2 className="text-2xl font-bold text-center">REGISTER</h2>
          <p className="text-center">
            Already Member ?{" "}
            <Link className="text-red-300 " to="/login">
              Login
            </Link>
          </p>
          <FormRegister />

          <div
            className="flex justify-center mt-5
          "
          >
            <p className="text-gray-500">or login with</p>
          </div>

          <div className="mt-3 flex justify-center">
            <button>
              <img src={Google} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
