import React, { useState, useEffect } from "react";

export default function DetailAnswer(props) {
  const [data, setData] = useState();
  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://survo-app.herokuapp.com/api/v1/surveyrespond/${props.match.params.id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data[0].answer);
        setData(response.data.data[0].answer);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <table className="table-auto border-collapse border border-slate-500 ">
        <thead>
          <tr>
            <th className="border border-slate-600 p-1">No</th>
            <th className="border border-slate-600 p-1">Jawaban</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => {
            return (
              <tr>
                <td className="border border-slate-600 p-1">{i + 1}</td>
                <td className="border border-slate-600 p-1">{item.respond}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
