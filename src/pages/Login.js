import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/images/BigLogo.png";
import Google from "assets/images/Google.png";
import Vector1 from "assets/images/Vector1.png";
import Vector2 from "assets/images/Vector2.png";
import Vector3 from "assets/images/Vector3.png";
import Vector4 from "assets/images/Vector4.png";

export default function Login() {
  return (
    <div className="">
      <img className="fixed top-20 left-0" src={Vector1} />
      <img className="fixed top-20 right-0 " src={Vector2} />
      <img className="fixed right-0 bottom-0" src={Vector3} />
      <img className="fixed left-0 bottom-0" src={Vector4} />

      <div className="flex flex-col container mx-auto items-center justify-center">
        <div className="w-2/4 border rounded-lg shadow-xl flex flex-col py-10">
          <img
            src={Logo}
            style={{ width: 414, height: 313 }}
            className="mx-auto"
          />
          <h2 className="text-2xl font-bold text-center">WELCOME BACK !</h2>
          <p className="text-center">
            First time to create a survey ?{" "}
            <Link className="text-red-300 " to="/register">
              Register
            </Link>
          </p>
          <form className="mt-8 space-y-6 w-3/4 mx-auto" method="POST">
            <div className="rounded-md shadow-sm ">
              <div className="mb-2">
                {/* <label for="email-address">Email address</label> */}
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                {/* <label for="password">Password</label> */}
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex justify-center ">
              <button
                type="submit"
                className=" relative  py-2 px-16 border border-transparent text-sm font-medium rounded-md text-white bg-red-300 focus:outline-none"
              >
                Login
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
