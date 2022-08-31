import { data } from "autoprefixer";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getToken } from "helpers/common.js";
import { useHistory } from "react-router-dom";
export default function CreateSurvey() {
  const history = useHistory();
  const [surveyTotal, setSurveyTotal] = useState();
  const question1 = useRef();
  const question2 = useRef();
  const question3 = useRef();
  const question4 = useRef();
  const question5 = useRef();
  const choiceA_1 = useRef();
  const choiceB_1 = useRef();
  const choiceC_1 = useRef();
  const choiceA_2 = useRef();
  const choiceB_2 = useRef();
  const choiceC_2 = useRef();
  const choiceA_3 = useRef();
  const choiceB_3 = useRef();
  const choiceC_3 = useRef();
  const choiceA_4 = useRef();
  const choiceB_4 = useRef();
  const choiceC_4 = useRef();
  const choiceA_5 = useRef();
  const choiceB_5 = useRef();
  const choiceC_5 = useRef();
  const type1 = useRef();
  const type2 = useRef();
  const type3 = useRef();
  const type4 = useRef();
  const type5 = useRef();
  const surveyCategory = useRef();
  const surveyTitle = useRef();
  const surveyDescription = useRef();
  const target = useRef();
  const arrSubmit = [];
  const token = getToken();

  const submit = (e) => {
    e.preventDefault();

    let arrChoice_1 =
      choiceA_1.current.value +
      "," +
      choiceB_1.current.value +
      "," +
      choiceC_1.current.value;

    let arrChoice_2 =
      choiceA_2.current.value +
      "," +
      choiceB_2.current.value +
      "," +
      choiceC_2.current.value;

    let arrChoice_3 =
      choiceA_3.current.value +
      "," +
      choiceB_3.current.value +
      "," +
      choiceC_3.current.value;

    let arrChoice_4 =
      choiceA_4.current.value +
      "," +
      choiceB_4.current.value +
      "," +
      choiceC_4.current.value;

    let arrChoice_5 =
      choiceA_5.current.value +
      "," +
      choiceB_5.current.value +
      "," +
      choiceC_5.current.value;

    var axios = require("axios");

    var data = JSON.stringify({
      survey_category: surveyCategory.current.value,
      survey_title: surveyTitle.current.value,
      survey_description: surveyDescription.current.value,
      target: parseInt(target.current.value),
      question: [
        {
          survey_question: question1.current.value,
          question_type: type1.current.value,
          option_name: arrChoice_1,
        },
        {
          survey_question: question2.current.value,
          question_type: type2.current.value,
          option_name: arrChoice_2,
        },
        {
          survey_question: question3.current.value,
          question_type: type3.current.value,
          option_name: arrChoice_3,
        },
        {
          survey_question: question4.current.value,
          question_type: type4.current.value,
          option_name: arrChoice_4,
        },
        {
          survey_question: question5.current.value,
          question_type: type5.current.value,
          option_name: arrChoice_5,
        },
      ],
    });

    console.log(data);

    var config = {
      method: "post",
      url: "https://survo-app.herokuapp.com/api/v1/createsurvey",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        history.push("/surveys");
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
                  ref={choiceA_1}
                />{" "}
              </div>
              <div>
                <label>Answer B</label>
                <input
                  name="surveyDescription"
                  type="text"
                  required
                  className="form-control block appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="B"
                  ref={choiceB_1}
                />{" "}
              </div>
              <div>
                <label>Answer C</label>

                <input
                  name="surveyDescription"
                  type="text"
                  required
                  className="form-control block  appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="C"
                  ref={choiceC_1}
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <label>Question 2</label>
            <input
              name="surveyDescription"
              type="text"
              required
              className="form-control block w-3/4 appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              placeholder="Question 2"
              ref={question2}
            />
            <div className="flex w-3/4 justify-around mt-4">
              <div>
                <label>Type</label>
                <select
                  name="surveyDescription"
                  type="text"
                  required
                  ref={type2}
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
                  ref={choiceA_2}
                />{" "}
              </div>
              <div>
                <label>Answer B</label>
                <input
                  name="surveyDescription"
                  type="text"
                  required
                  className="form-control block appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="B"
                  ref={choiceB_2}
                />{" "}
              </div>
              <div>
                <label>Answer C</label>

                <input
                  name="surveyDescription"
                  type="text"
                  required
                  className="form-control block  appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="C"
                  ref={choiceC_2}
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <label>Question 3</label>
            <input
              name="surveyDescription"
              type="text"
              required
              className="form-control block w-3/4 appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              placeholder="Question 3"
              ref={question3}
            />
            <div className="flex w-3/4 justify-around mt-4">
              <div>
                <label>Type</label>
                <select
                  name="surveyDescription"
                  type="text"
                  required
                  ref={type3}
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
                  ref={choiceA_3}
                />{" "}
              </div>
              <div>
                <label>Answer B</label>
                <input
                  name="surveyDescription"
                  type="text"
                  required
                  className="form-control block appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="B"
                  ref={choiceB_3}
                />{" "}
              </div>
              <div>
                <label>Answer C</label>

                <input
                  name="surveyDescription"
                  type="text"
                  required
                  className="form-control block  appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="C"
                  ref={choiceC_3}
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <label>Question 4</label>
            <input
              name="surveyDescription"
              type="text"
              required
              className="form-control block w-3/4 appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              placeholder="Question 4"
              ref={question4}
            />
            <div className="flex w-3/4 justify-around mt-4">
              <div>
                <label>Type</label>
                <select
                  name="surveyDescription"
                  type="text"
                  required
                  ref={type4}
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
                  ref={choiceA_4}
                />{" "}
              </div>
              <div>
                <label>Answer B</label>
                <input
                  name="surveyDescription"
                  type="text"
                  required
                  className="form-control block appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="B"
                  ref={choiceB_4}
                />{" "}
              </div>
              <div>
                <label>Answer C</label>

                <input
                  name="surveyDescription"
                  type="text"
                  required
                  className="form-control block  appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="C"
                  ref={choiceC_4}
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <label>Question 5</label>
            <input
              name="surveyDescription"
              type="text"
              required
              className="form-control block w-3/4 appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              placeholder="Question 5"
              ref={question5}
            />
            <div className="flex w-3/4 justify-around mt-4">
              <div>
                <label>Type</label>
                <select
                  name="surveyDescription"
                  type="text"
                  required
                  ref={type5}
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
                  ref={choiceA_5}
                />{" "}
              </div>
              <div>
                <label>Answer B</label>
                <input
                  name="surveyDescription"
                  type="text"
                  required
                  className="form-control block appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="B"
                  ref={choiceB_5}
                />{" "}
              </div>
              <div>
                <label>Answer C</label>

                <input
                  name="surveyDescription"
                  type="text"
                  required
                  className="form-control block  appearance-none rounded relative px-3  py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                  placeholder="C"
                  ref={choiceC_5}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mb-10 justify-center w-3/4">
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
