import React from "react";

export default function FormRegister() {
  return (
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
  );
}
