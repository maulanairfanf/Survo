import React, { useEffect, useState } from "react";
import { getId, getToken } from "helpers/common";
import { Link } from "react-router-dom";

export default function MySurvey() {
  const [data, setData] = useState();
  const id = getId();
  const token = getToken();
  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://survo-app.herokuapp.com/api/v1/surveylist?${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.data));
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <table className="table-auto border-collapse border border-slate-500 ">
        <thead>
          <tr>
            <th className="border border-slate-600 p-1">No</th>
            <th className="border border-slate-600 p-1">Title</th>
            <th className="border border-slate-600 p-1">Summary</th>
            <th className="border border-slate-600 p-1">Category</th>
            <th className="border border-slate-600 p-1">Target</th>
            <th className="border border-slate-600 p-1">Count</th>
            <th className="border border-slate-600 p-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => {
            return (
              <tr>
                <td className="border border-slate-600 p-1">{i + 1}</td>
                <td className="border border-slate-600 p-1">{item.title}</td>
                <td className="border border-slate-600 p-1">{item.summary}</td>
                <td className="border border-slate-600 p-1">{item.category}</td>
                <td className="border border-slate-600 p-1">{item.target}</td>
                <td className="border border-slate-600 p-1">{item.count}</td>
                <td className="border border-slate-600 p-1">
                  <div className="flex justify-center">
                    <Link to={`/detailsurvey/` + item.id}>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5837 24.25C15.1722 24.2495 17.6861 23.3829 19.7251 21.7884L26.136 28.1992L28.198 26.1371L21.7872 19.7263C23.3826 17.687 24.2497 15.1725 24.2503 12.5834C24.2503 6.15065 19.0164 0.916687 12.5837 0.916687C6.15095 0.916687 0.916992 6.15065 0.916992 12.5834C0.916992 19.0161 6.15095 24.25 12.5837 24.25ZM12.5837 3.83335C17.4093 3.83335 21.3337 7.75773 21.3337 12.5834C21.3337 17.409 17.4093 21.3334 12.5837 21.3334C7.75803 21.3334 3.83366 17.409 3.83366 12.5834C3.83366 7.75773 7.75803 3.83335 12.5837 3.83335Z"
                          fill="#7E1515"
                        />
                      </svg>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
