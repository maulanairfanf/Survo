import React, { useState } from "react";
import Vector from "assets/images/VectorPricing.png";
import { getToken, getId } from "helpers/common.js";

export default function Pricing() {
  const [message, setMessage] = useState("");
  const token = getToken();
  const id = getId();
  console.log(id);
  const getPremium = (e) => {
    e.preventDefault();
    var axios = require("axios");

    var config = {
      method: "post",
      url: `https://survo-app.herokuapp.com/api/v1/transactionpremium/${id}`,
      headers: {
        Authorization: `Bearer ${token} `,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("Succes request untuk menjadi member premium");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <img
        className="fixed bottom-0 left-44"
        style={{ width: 1500 }}
        src={Vector}
      />
      <div className="container mx-auto drop-shadow-xl bg-red-50 rounded p-4 pb-44 mt-5 w-4/6">
        <h1 className="text-center text-red-300 text-5xl font-bold mb-20 mt-5">
          Go Premium
        </h1>
        <div className="flex justify-around ">
          <div className="flex flex-col bg-red-100 text-white p-10 w-2/5 ">
            <h1 className="text-3xl mb-10 mt-5 font-bold text-center ">
              Rp <span className="text-5xl mt-10">0</span>
            </h1>
            <h5 className="text-3xl font-bold mb-5 text-center">Free Trial</h5>
            <p className="text-2xl font-light text-center mb-10">
              Limited Access
            </p>
            <p className="text-sm font-light">
              Can only use 3 times for survey <br /> and join survey Only 50
              respondents can participate <br /> No withdraw coints available
            </p>
          </div>
          <div className="flex flex-col bg-red-100 text-white p-10 w-2/5">
            <button onClick={getPremium}>
              <h1 className="text-3xl mb-10 mt-5 font-bold text-center ">
                Rp <span className="text-5xl mt-10">35.000</span>
              </h1>
              <h5 className="text-3xl font-bold mb-5 text-center">Premium</h5>
              <p className="text-2xl font-light text-center mb-10">
                Unlimited access <br />
                to all platform
              </p>
              <p className="text-sm font-light">
                Unlimited use for survey and join survey <br /> Unlimited
                respondents can participate <br /> Withdraw mininum 5.000 coins
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
