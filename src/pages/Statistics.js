import React from 'react';
import profile from 'assets/images/black_hole.jpg';

export default function Statistics() {
  return (
    <div className="">
      <div className="m-8 border rounded-lg p-8">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              src={profile}
              alt="profile pict"
              style={{ width: 47, height: 47 }}
              className="mx-auto rounded-full mr-4 object-cover cursor-pointer"
            />
            <div>
              <p className="text-2xl">Aninda</p>
              <p className="text-red-500">Premium Account</p>
            </div>
          </div>
          <div className="flex text-center">
            <div className="mx-5">
              <p className="text-lg	">Total Surveys</p>
              <p className="text-2xl">23</p>
            </div>
            <div className="mx-5">
              <p className="text-lg	">Total Respondents</p>
              <p className="text-2xl">1809</p>
            </div>
            <div className="mx-5">
              <p className="text-lg	">Participate in Survey</p>
              <p className="text-2xl">41</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" m-8 border rounded-lg flex justify-between">
        <div className=" p-8">
          <h1 className="text-2xl font-bold mb-2">Recent Updates</h1>
          <p className="mb-4 text-lg	">Top Surveyor Precentage</p>
          <div className="flex">
            <div className="mr-10">
              <div className="flex items-center mb-4">
                <div className="rounded-full p-4 bg-yellow-100 ">
                  <p className="font-bold text-lg ">24%</p>
                </div>
                <p className="ml-5 font-semibold text-lg">Students</p>
              </div>
              <div className="flex items-center">
                <div className="rounded-full p-4 bg-blue-100 ">
                  <p className="font-bold text-lg ">38%</p>
                </div>
                <p className="ml-5 font-semibold text-lg">Brands</p>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="rounded-full p-4 bg-orange-100 ">
                  <p className="font-bold text-lg ">20%</p>
                </div>
                <p className="ml-5 font-semibold text-lg">Students</p>
              </div>
              <div className="flex items-center">
                <div className="rounded-full p-4 bg-rose-200 ">
                  <p className="font-bold text-lg ">18%</p>
                </div>
                <p className="ml-5 font-semibold text-lg">Brands</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-red-100 p-8 w-2/4 m-1 text-white">
          <p className="font-bold text-xl mb-5">Top Survey</p>
          <p className="mb-4">Can sleepwalking make your heart beat faster ?</p>
          <div className="flex items-center mb-8">
            <img
              src={profile}
              alt="profile"
              style={{ width: 26, height: 26 }}
              className=" rounded-full mr-4 object-cover cursor-pointer"
            />
            <div>
              <p className="font-extralight">Survey by angelicahd</p>
              <p className="font-extralight	">1287 responses</p>
            </div>
          </div>
          <div className="">
            <button className="px-5 py-2 bg-red-100 border border-white rounded-full">
              Join Survey
            </button>
          </div>
        </div>
      </div>
      <div className="m-8 border rounded-lg">
        <div className="p-8">
          <h1 className="text-lg mb-5 font-semibold">
            Top Category Percentage
          </h1>
          <div className="mb-5">
            <p className="mb-2 text-sm">Food and Beverages</p>
            <div className="relative">
              <div
                className=" bg-red-300  rounded-lg text-center  text-white opacity-50  w-100"
                style={{ height: 20 }}
              ></div>
              <div
                className=" bg-red-300 h-100 rounded-lg text-center absolute text-white w-3/4 -translate-y-5"
                style={{ height: 20 }}
              ></div>
            </div>
          </div>
          <div className="mb-5">
            <p className="mb-2 text-sm">Education</p>{' '}
            <div className="relative">
              <div
                className=" bg-blue-100  rounded-lg text-center  text-white opacity-50  w-100"
                style={{ height: 20 }}
              ></div>
              <div
                className=" bg-blue-100 h-100 rounded-lg text-center absolute text-white w-3/4 -translate-y-5"
                style={{ height: 20 }}
              ></div>
            </div>
          </div>{' '}
          <div className="mb-5">
            <p className="mb-2 text-sm">Self-Healing</p>{' '}
            <div className="relative">
              <div
                className=" bg-yellow-100  rounded-lg text-center  text-white opacity-50  w-100"
                style={{ height: 20 }}
              ></div>
              <div
                className=" bg-yellow-100 h-100 rounded-lg text-center absolute text-white w-3/4 -translate-y-5"
                style={{ height: 20 }}
              ></div>
            </div>
          </div>{' '}
          <div className="mb-5">
            <p className="mb-2 text-sm">Financial</p>{' '}
            <div className="relative">
              <div
                className=" bg-orange-100  rounded-lg text-center  text-white opacity-50  w-100"
                style={{ height: 20 }}
              ></div>
              <div
                className=" bg-orange-100 h-100 rounded-lg text-center absolute text-white w-3/4 -translate-y-5"
                style={{ height: 20 }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
