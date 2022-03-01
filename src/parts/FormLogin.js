import React from "react";

export default function FormLogin() {
  return (
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
  );
}
