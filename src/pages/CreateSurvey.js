import { data } from 'autoprefixer';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getToken } from 'helpers/common.js';

export default function CreateSurvey() {
  const [surveyTotal, setSurveyTotal] = useState();
  const question1 = useRef();
  const choiceA = useRef();
  const choiceB = useRef();
  const choiceC = useRef();
  const type1 = useRef();
  const surveyCategory = useRef();
  const surveyTitle = useRef();
  const surveyDescription = useRef();
  const target = useRef();
  const arrSubmit = [];
  const token = getToken();

  const submit = e => {
    e.preventDefault();
    let arr_choice = [];
    arr_choice.push(choiceA.current.value);
    arr_choice.push(choiceB.current.value);
    arr_choice.push(choiceC.current.value);
    let arrChoice =
      choiceA.current.value +
      ',' +
      choiceB.current.value +
      ',' +
      choiceC.current.value;

    var axios = require('axios');

    var data = JSON.stringify({
      survey_category: surveyCategory.current.value,
      survey_title: surveyTitle.current.value,
      survey_description: surveyDescription.current.value,
      target: parseInt(target.current.value),
      question: [
        {
          survey_question: question1.current.value,
          question_type: type1.current.value,
          option_name: arrChoice,
        },
      ],
    });

    var config = {
      method: 'post',
      url: 'https://survo-app.herokuapp.com/api/v1/createsurvey',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="">
        <h1 className="flex items-center text-2xl font-bold	">
          <Link className="mr-4" to="/survey">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 14C28 11.2311 27.1789 8.52431 25.6406 6.22202C24.1022 3.91973 21.9157 2.12532 19.3576 1.06569C16.7994 0.00606063 13.9845 -0.271186 11.2687 0.269008C8.553 0.809202 6.05844 2.14257 4.1005 4.10051C2.14257 6.05844 0.809199 8.553 0.269005 11.2687C-0.271188 13.9845 0.00605867 16.7994 1.06569 19.3576C2.12531 21.9157 3.91973 24.1022 6.22202 25.6406C8.52431 27.1789 11.2311 28 14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14ZM22 15L9.85 15L15.43 20.607L14 22L6 14L14 6L15.43 7.427L9.85 13L22 13L22 15Z"
                fill="black"
              />
            </svg>
          </Link>
          Create New Survey
        </h1>
      </div>

      <form className="mt-5" action="" onSubmit={submit}>
        <div>
          <div className="mb-2">
            <p>Survey Category</p>
            <input
              name="surveyCategory"
              type="text"
              ref={surveyCategory}
              required
              className="form-control block w-1/5 appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              placeholder="Survey Category"
            />
          </div>
          <div className="mb-2">
            <p>Survey Title</p>
            <input
              name="surveyTitle"
              type="text"
              ref={surveyTitle}
              required
              className="form-control block w-1/5 appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              placeholder="Survey Title"
            />
          </div>
          <div className="mb-2">
            <p>Survey Description</p>
            <textarea
              name="surveyDescription"
              type="text"
              ref={surveyDescription}
              required
              className="form-control block w-1/5 appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              placeholder="Survey Description"
            />
          </div>
          <div className="mb-2">
            <p>Answer Target</p>
            <input
              name="surveyDescription"
              type="number"
              ref={target}
              required
              className="form-control block w-1/5 appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              placeholder="0"
            />
          </div>
          {/* <div className="mb-2">
            <p>Survey Total</p>
            <input
              name="surveyTotal"
              type="text"
              onChange={handleChange}
              required
              className="form-control block w-1/5 appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              placeholder="Total Survey"
            />
          </div> */}
        </div>
        <div>
          <div className="mb-8">
            <label>Question 1</label>
            <input
              name="surveyDescription"
              type="text"
              required
              className="form-control block w-3/4 appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              placeholder="Question 1"
              ref={question1}
            />
            <div className="flex w-3/4 justify-around mt-4">
              <div>
                <label>Type</label>
                <select
                  name="surveyDescription"
                  type="text"
                  required
                  ref={type1}
                  className="form-control block w-3/4 appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                >
                  <option value="Radio">Radio</option>
                  <option value="Checkbox">Checkbox</option>
                </select>
              </div>
              <div>
                <label>Answer A</label>
                <input
                  name="surveyDescription"
                  type="text"
                  required
                  className="form-control block  appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="A"
                  ref={choiceA}
                />{' '}
              </div>
              <div>
                <label>Answer B</label>
                <input
                  name="surveyDescription"
                  type="text"
                  required
                  className="form-control block appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="B"
                  ref={choiceB}
                />{' '}
              </div>
              <div>
                <label>Answer C</label>

                <input
                  name="surveyDescription"
                  type="text"
                  required
                  className="form-control block  appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="C"
                  ref={choiceC}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <button
            type="submit"
            className=" relative py-2 px-16 border border-transparent text-sm font-medium rounded-md text-white bg-red-300 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
