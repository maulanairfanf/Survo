import React, { useState, useEffect } from "react";
import { getToken } from "helpers/common.js";
import { useHistory } from "react-router-dom";

export default function AnswerSurvey(props) {
  const token = getToken();
  const [survey, setSurvey] = useState("");
  const [id, setId] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const history = useHistory();

  var axios = require("axios");
  var config = {
    method: "get",
    url: `https://survo-app.herokuapp.com/api/v1/surveydetail/${props.match.params.id}`,
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setSurvey(response.data.data.question);
        setId(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleChange1 = (e) => {
    const answer = e.target;
    setAnswer1(answer);
  };
  const handleChange2 = (e) => {
    const answer = e.target;
    setAnswer2(answer);
  };
  const handleChange3 = (e) => {
    const answer = e.target;
    setAnswer3(answer);
  };
  const handleChange4 = (e) => {
    const answer = e.target;
    setAnswer4(answer);
  };
  const handleChange5 = (e) => {
    const answer = e.target;
    setAnswer5(answer);
  };

  const submit = (e) => {
    e.preventDefault();
    var axios = require("axios");

    const item = JSON.stringify([
      {
        survey_id: id.id,
        user_id: id.user_id,
        question_id: survey[0].id,
        respond: answer1.value,
      },
      {
        survey_id: id.id,
        user_id: id.user_id,
        question_id: survey[1].id,
        respond: answer2.value,
      },
      {
        survey_id: id.id,
        user_id: id.user_id,
        question_id: survey[2].id,
        respond: answer3.value,
      },
      {
        survey_id: id.id,
        user_id: id.user_id,
        question_id: survey[3].id,
        respond: answer4.value,
      },
      {
        survey_id: id.id,
        user_id: id.user_id,
        question_id: survey[4].id,
        respond: answer5.value,
      },
    ]);
    var config = {
      method: "post",
      url: "https://survo-app.herokuapp.com/api/v1/answerquestion",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: item,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.data.meta.message);
        alert(response.data.meta.message);
        history.push("/surveys");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {console.log(survey.length)}
      {survey.length !== 0 ? (
        <form onSubmit={submit}>
          <div>
            <p className="font-bold">
              1.{" "}
              {survey[0].survey_question
                ? survey[0].survey_question
                : "Waiting..."}{" "}
              ?
            </p>
            {survey[0].question_type == "Radio" ? (
              <div className="w-3/4 flex justify-around mt-4">
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer1_1"
                    value="radio A"
                    name="answer_1"
                    onChange={handleChange1}
                  />
                  <label htmlFor="answer1_1">{survey[0].option_name[0]}</label>
                </div>
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer1_2"
                    value="radio B"
                    name="answer_1"
                    onChange={handleChange1}
                  />
                  <label htmlFor="answer1_2">{survey[0].option_name[1]}</label>
                </div>
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer1_3"
                    value="radio C"
                    name="answer_1"
                    onChange={handleChange1}
                  />
                  <label htmlFor="answer1_3">{survey[0].option_name[2]}</label>
                </div>
              </div>
            ) : (
              <div className="w-3/4 flex justify-around mt-4">
                {/* <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer1_1"
                value="checkbox A"
                name="answer_1"
                onChange={handleChange1}
              />
              <label htmlFor="answer1_1">{survey[0].option_name[0]}</label>
            </div>
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer1_2"
                value="checkbox B"
                name="answer_1"
                onChange={handleChange1}
              />
              <label htmlFor="answer1_2">{survey[0].option_name[1]}</label>
            </div>
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer1_3"
                value="checkbox C"
                name="answer_1"
                onChange={handleChange1}
              />
              <label htmlFor="answer1_3">{survey[0].option_name[2]}</label>
            </div> */}
              </div>
            )}
          </div>
          <div>
            <p className="font-bold">
              2.{" "}
              {survey[1].survey_question
                ? survey[1].survey_question
                : "Waiting..."}{" "}
              ?
            </p>
            {survey[1].question_type == "Radio" ? (
              <div className="w-3/4 flex justify-around mt-4">
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer2_1"
                    name="answer2"
                    value="radio A"
                    onChange={handleChange2}
                  />
                  <label htmlFor="answer2_1">{survey[1].option_name[0]}</label>
                </div>
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer2_2"
                    name="answer2"
                    value="radio B"
                    onChange={handleChange2}
                  />
                  <label htmlFor="answer2_2">{survey[1].option_name[1]}</label>
                </div>
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer2_3"
                    name="answer2"
                    value="radio C"
                    onChange={handleChange2}
                  />
                  <label htmlFor="answer2_3">{survey[1].option_name[2]}</label>
                </div>
              </div>
            ) : (
              <div className="w-3/4 flex justify-around mt-4">
                {/* <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer2_1"
                name="answer2"
                value="checkbox A"
                onChange={handleChange2}
              />
              <label htmlFor="answer2_1">{survey[1].option_name[0]}</label>
            </div>
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer2_2"
                name="answer2"
                value="checkbox B"
                onChange={handleChange2}
              />
              <label htmlFor="answer2_2">{survey[1].option_name[1]}</label>
            </div>
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer2_3"
                name="answer2"
                value="checkbox C"
                onChange={handleChange2}
              />
              <label htmlFor="answer2_3">{survey[1].option_name[2]}</label>
            </div> */}
              </div>
            )}
          </div>
          <div>
            <p className="font-bold">
              3.{" "}
              {survey[2].survey_question
                ? survey[2].survey_question
                : "Waiting..."}
              ?
            </p>
            {survey[2].question_type == "Radio" ? (
              <div className="w-3/4 flex justify-around mt-4">
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer3_1"
                    name="answer3"
                    value="radio A"
                    onChange={handleChange3}
                  />
                  <label htmlFor="answer3_1">{survey[2].option_name[0]}</label>
                </div>
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer3_2"
                    name="answer3"
                    value="radio B"
                    onChange={handleChange3}
                  />
                  <label htmlFor="answer3_2">{survey[2].option_name[1]}</label>
                </div>
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer3_3"
                    name="answer3"
                    value="radio C"
                    onChange={handleChange3}
                  />
                  <label htmlFor="answer3_3">{survey[2].option_name[2]}</label>
                </div>
              </div>
            ) : (
              <div className="w-3/4 flex justify-around mt-4">
                {/* <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer3_1"
                name="answer3"
                value="checkbox A"
                onChange={handleChange3}
              />
              <label htmlFor="answer3_1">{survey[2].option_name[0]}</label>
            </div>
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer3_2"
                name="answer3"
                value="checkbox B"
                onChange={handleChange3}
              />
              <label htmlFor="answer3_2">{survey[2].option_name[1]}</label>
            </div>
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer3_3"
                name="answer3"
                value="checkbox C"
                onChange={handleChange3}
              />
              <label htmlFor="answer3_3">{survey[2].option_name[2]}</label>
            </div> */}
              </div>
            )}
          </div>
          <div>
            <p className="font-bold">
              4.{" "}
              {survey[3].survey_question
                ? survey[3].survey_question
                : "Waiting..."}{" "}
              ?
            </p>
            {survey[3].question_type == "Radio" ? (
              <div className="w-3/4 flex justify-around mt-4">
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer4_1"
                    name="answer4"
                    value="radio A"
                    onChange={handleChange4}
                  />
                  <label htmlFor="answer4_1">{survey[3].option_name[0]}</label>
                </div>
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer4_2"
                    name="answer4"
                    value="radio B"
                    onChange={handleChange4}
                  />
                  <label htmlFor="answer4_2">{survey[3].option_name[1]}</label>
                </div>
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer4_3"
                    name="answer4"
                    value="radio C"
                    onChange={handleChange4}
                  />
                  <label htmlFor="answer4_3">{survey[3].option_name[2]}</label>
                </div>
              </div>
            ) : (
              <div className="w-3/4 flex justify-around mt-4">
                {/* <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer4_1"
                name="answer4"
                value="Checkbox A"
                onChange={handleChange4}
              />
              <label htmlFor="answer4_1">{survey[3].option_name[0]}</label>
            </div>
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer4_2"
                name="answer4"
                value="Checkbox B"
                onChange={handleChange4}
              />
              <label htmlFor="answer4_2">{survey[3].option_name[1]}</label>
            </div>
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer4_3"
                name="answer4"
                value="Checkbox C"
                onChange={handleChange4}
              />
              <label htmlFor="answer4_3">{survey[3].option_name[2]}</label>
            </div> */}
              </div>
            )}
          </div>
          <div>
            <p className="font-bold">
              5.
              {survey[4].survey_question
                ? survey[4].survey_question
                : "Waiting..."}{" "}
              ?
            </p>
            {survey[4].question_type == "Radio" ? (
              <div className="w-3/4 flex justify-around mt-4">
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer5_1"
                    name="answer5"
                    value="radio A"
                    onChange={handleChange5}
                  />
                  <label htmlFor="answer5_1">{survey[4].option_name[0]}</label>
                </div>
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer5_2"
                    name="answer5"
                    value="radio B"
                    onChange={handleChange5}
                  />
                  <label htmlFor="answer5_2">{survey[4].option_name[1]}</label>
                </div>
                <div className="flex items-center ">
                  <input
                    className="mr-2"
                    type="radio"
                    id="answer5_3"
                    name="answer5"
                    value="radio C"
                    onChange={handleChange5}
                  />
                  <label htmlFor="answer5_3">{survey[4].option_name[2]}</label>
                </div>
              </div>
            ) : (
              <div className="w-3/4 flex justify-around mt-4">
                {/* <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer5_1"
                name="answer5"
                value="Checkbox A"
                onChange={handleChange5}
              />
              <label htmlFor="answer5_1">{survey[4].option_name[0]}</label>
            </div>
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer5_2"
                name="answer5"
                value="Checkbox B"
                onChange={handleChange5}
              />
              <label htmlFor="answer5_2">{survey[4].option_name[1]}</label>
            </div>
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="checkbox"
                id="answer5_3"
                name="answer5"
                value="Checkbox C"
                onChange={handleChange5}
              />
              <label htmlFor="answer5_3">{survey[4].option_name[2]}</label>
            </div> */}
              </div>
            )}
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
