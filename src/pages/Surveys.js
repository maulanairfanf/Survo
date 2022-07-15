import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Surveys() {
  const [surveys, setSurveys] = useState("");

  useEffect(() => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: "https://survo-app.herokuapp.com/api/v1/surveylist",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNjU2MzAzNTE1LCJpc3MiOiJBdXRoU2VydmljZSJ9.Fnlb8GYXUVGxcuFLzjijsQdV6UHzO4kmT6snPI8HsaA",
      },
    };

    axios(config)
      .then(function (response) {
        setSurveys(response.data.data);
        console.log(surveys);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const dataRender = surveys
    ? surveys.map((items) => (
        <div
          className="border p-5 rounded-lg my-5"
          style={{ width: 500, height: 200 }}
        >
          <h1 className="font-bold text-xl mb-4">{items.title}</h1>
          <p className="mb-4">15 questions</p>
          <p className="mb-4">
            <span className="text-yellow-100 mr-1">Waiting...</span>(
            {items.count}/{items.target} responses)
          </p>
          <div className="flex justify-between">
            <div className="flex items-center">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8.70762V9.625C0 10.3834 1.84766 11 4.125 11C6.40234 11 8.25 10.3834 8.25 9.625V8.70762C7.3627 9.33281 5.74062 9.625 4.125 9.625C2.50938 9.625 0.887305 9.33281 0 8.70762ZM6.875 2.75C9.15234 2.75 11 2.1334 11 1.375C11 0.616602 9.15234 0 6.875 0C4.59766 0 2.75 0.616602 2.75 1.375C2.75 2.1334 4.59766 2.75 6.875 2.75ZM0 6.45391V7.5625C0 8.3209 1.84766 8.9375 4.125 8.9375C6.40234 8.9375 8.25 8.3209 8.25 7.5625V6.45391C7.3627 7.18437 5.73848 7.5625 4.125 7.5625C2.51152 7.5625 0.887305 7.18437 0 6.45391ZM8.9375 6.69023C10.1686 6.45176 11 6.00918 11 5.5V4.58262C10.5016 4.93496 9.76895 5.17559 8.9375 5.32383V6.69023ZM4.125 3.4375C1.84766 3.4375 0 4.20664 0 5.15625C0 6.10586 1.84766 6.875 4.125 6.875C6.40234 6.875 8.25 6.10586 8.25 5.15625C8.25 4.20664 6.40234 3.4375 4.125 3.4375ZM8.83652 4.64707C10.1256 4.41504 11 3.95957 11 3.4375V2.52012C10.2373 3.05938 8.92676 3.34941 7.54746 3.41816C8.18125 3.72539 8.64746 4.13789 8.83652 4.64707Z"
                  fill="#FFD24D"
                />
              </svg>
              <span className="ml-2">+ {items.point} points</span>
            </div>
            <div>
              <button className="text-white rounded bg-red-75 py-2 px-5">
                Join Survey
              </button>
            </div>
          </div>
        </div>
      ))
    : "";

  return (
    <div className="m-10">
      <div className="flex justify-between">
        <div className="flex items-center">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5837 24.25C15.1722 24.2495 17.6861 23.3829 19.7251 21.7884L26.136 28.1992L28.198 26.1371L21.7872 19.7263C23.3826 17.687 24.2497 15.1725 24.2503 12.5834C24.2503 6.15065 19.0164 0.916687 12.5837 0.916687C6.15095 0.916687 0.916992 6.15065 0.916992 12.5834C0.916992 19.0161 6.15095 24.25 12.5837 24.25ZM12.5837 3.83335C17.4093 3.83335 21.3337 7.75773 21.3337 12.5834C21.3337 17.409 17.4093 21.3334 12.5837 21.3334C7.75803 21.3334 3.83366 17.409 3.83366 12.5834C3.83366 7.75773 7.75803 3.83335 12.5837 3.83335Z"
              fill="black"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Survey"
            className="pr-10 ml-4 appearance-none rounded relative px-3 py-2 border border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
          />
        </div>
        <div>
          <select
            id="category"
            name="category"
            className="ml-4 pr-10 rounded relative px-3 py-2 border border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
          >
            <option value="">Survey Category</option>
            <option value="Food">Food</option>
            <option value="Education">Education</option>
            <option value="Healing">Healing</option>
            <option value="financial">Financial</option>
          </select>
          <input
            type="date"
            className="ml-4 pr-10 appearance-none rounded relative px-3 py-2 border border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
          />
        </div>
      </div>
      <div className="bg-red-75 flex justify-between mt-10 rounded-lg p-10">
        <div>
          <h1 className="font-bold text-white text-2xl">New Survey</h1>
          <p className="text-white">Survey can help to solve problems</p>
        </div>
        <Link
          to="/createsurvey"
          className="text-red-75 bg-white rounded-full px-10 py-2 font-bold mt-3"
        >
          Create New Survey
        </Link>
      </div>
      <div className="flex flex-wrap justify-between">{dataRender}</div>
    </div>
  );
}
