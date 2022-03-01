import React from "react";
import { Link } from "react-router-dom";
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
            Already Member ?
            <Link className="text-red-300 " to="/login">
              Login
            </Link>
          </p>
          <form className="mt-8 space-y-6 w-3/4 mx-auto" method="POST">
            <div className="rounded-md shadow-sm ">
              <div className="mb-2">
                <label>Full Name</label>
                <input
                  name="name"
                  type="name"
                  required
                  className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="full name"
                />
              </div>
              <div className="mb-2">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div className="mb-2">
                <label>Username</label>
                <input
                  name="username"
                  type="username"
                  required
                  className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div className="mb-2">
                <label>Occupation</label>
                <select
                  name="occupation"
                  className=" rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
                >
                  <option value="">PNS</option>
                  <option value="">Teacher</option>
                </select>
              </div>
              <div className="mb-2">
                <label>Password</label>
                <input
                  name="Password"
                  type="password"
                  placeholder="Password"
                  className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none  focus:z-10 sm:text-sm"
                />
              </div>
              <div className="mb-2">
                <label>Confirm Password</label>
                <input
                  name="Password"
                  type="Password"
                  placeholder="confirm password"
                  className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none  focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex justify-center ">
              <button
                type="submit"
                className=" relative  py-2 px-16 border border-transparent text-sm font-medium rounded-md text-white bg-red-300 focus:outline-none"
              >
                Register
              </button>
            </div>
          </form>

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
