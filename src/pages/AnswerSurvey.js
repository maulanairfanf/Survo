import React, { useState, useEffect } from "react";

export default function AnswerSurvey(props) {
  const [data, setData] = useState("");
  const [answer1, setAnswer1] = useState("");
  var axios = require("axios");
  var config = {
    method: "get",
    url: `https://survo-app.herokuapp.com/api/v1/surveydetail/${props.match.params.id}`,
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setData(response.data.data.question);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setAnswer1(value);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(answer1);
  };

  return (
    <div>
      {data ? (
        <form onSubmit={submit}>
          <p className="font-bold">1. {data[0].survey_question} ?</p>
          <div className="w-3/4 flex justify-around mt-4">
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="radio"
                id="answer1"
                name="answer"
                value="Radio A"
                onChange={handleChange}
              />
              <label htmlFor="answer1">{data[0].option_name[0]}</label>
            </div>
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="radio"
                id="answer2"
                name="answer"
                value="Radio B"
                onChange={handleChange}
              />
              <label htmlFor="answer2">{data[1].option_name[1]}</label>
            </div>
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="radio"
                id="answer3"
                name="answer"
                value="Radio C"
                onChange={handleChange}
              />
              <label htmlFor="answer3">{data[2].option_name[2]}</label>
            </div>
          </div>
          <div className="flex mb-10 justify-center w-3/4 mt-4">
            <button
              type="submit"
              className=" relative py-2 px-16 border border-transparent text-sm font-medium rounded-md text-white bg-red-300 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}
