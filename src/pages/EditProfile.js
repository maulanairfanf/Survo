import React from 'react';
import profile from 'assets/images/black_hole.jpg';

export default function EditProfile() {
  return (
    <>
      <div className="flex w-full justify-around mt-5">
        <div className="w-full m-5">
          <div className="flex items-center mb-10">
            <button className="mr-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 16C30 13.2311 29.1789 10.5243 27.6406 8.22202C26.1022 5.91973 23.9157 4.12532 21.3576 3.06569C18.7994 2.00606 15.9845 1.72881 13.2687 2.26901C10.553 2.8092 8.05844 4.14257 6.1005 6.10051C4.14257 8.05844 2.8092 10.553 2.26901 13.2687C1.72881 15.9845 2.00606 18.7994 3.06569 21.3576C4.12531 23.9157 5.91973 26.1022 8.22202 27.6406C10.5243 29.1789 13.2311 30 16 30C19.713 30 23.274 28.525 25.8995 25.8995C28.525 23.274 30 19.713 30 16ZM24 17L11.85 17L17.43 22.607L16 24L8 16L16 8L17.43 9.427L11.85 15L24 15L24 17Z"
                  fill="black"
                />
              </svg>
            </button>
            <p className="font-bold text-3xl">Edit Profile</p>
          </div>

          <form action="" className="w-full">
            <div className="mb-8">
              <label className="text-red-300">Full Name</label>
              <input
                name="name"
                type="name"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>{' '}
            <div className="mb-8">
              <label className="text-red-300">Email Address</label>
              <input
                name="email"
                type="email"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder="Email Address"
              />
            </div>{' '}
            <div className="mb-8">
              <label className="text-red-300">Username</label>
              <input
                name="username"
                type="username"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>{' '}
            <div className="mb-8">
              <label className="text-red-300">Password</label>
              <input
                name="password"
                type="password"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>{' '}
            <div className="mb-8">
              <label className="text-red-300">Confirm Password</label>
              <input
                name="password"
                type="password"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </form>
        </div>
        <div className="w-full m-5">
          <img
            src={profile}
            alt="profile"
            style={{ width: 259, height: 259 }}
            className=" mx-auto rounded-full object-cover cursor-pointer"
          />
          <div>
            <div className="mb-8">
              <label className="text-red-300">Profile</label>
              <input
                name="profile"
                type="file"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              />
            </div>{' '}
            <div className="mb-8">
              <label className="text-red-300">Phone Number</label>
              <input
                name="number"
                type="number"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder="Phone Number"
              />
            </div>{' '}
            <div className="mb-8">
              <label className="text-red-300">Date of Birth</label>
              <input
                name="date"
                type="date"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>{' '}
      <div className="w-full flex justify-center">
        <button className="px-20 py-2 bg-red-300 text-white rounded-lg">
          Save
        </button>
      </div>
    </>
  );
}
