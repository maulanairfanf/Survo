import React, { useEffect, useState } from "react";
import { getId, getToken } from "helpers/common";
export default function History() {
  const id = getId();
  const token = getToken();
  const [data, setData] = useState();
  const [amount, setAmount] = useState();
  const [rekening, setRekening] = useState();
  const [wallet, setWallet] = useState();
  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://survo-app.herokuapp.com/api/v1/transaction/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.data));
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const onChangeWallet = (e) => {
    setWallet(e.target.value);
  };
  const onChangeRekening = (e) => {
    setRekening(e.target.value);
  };
  const handleWithdraw = () => {
    var axios = require("axios");

    var data = JSON.stringify({
      norek: parseInt(rekening),
      wallet: wallet,
      amount: parseInt(amount),
    });

    var config = {
      method: "post",
      url: "https://survo-app.herokuapp.com/api/v1/transactionwithdraw",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("Succes withdraw point");
      })
      .catch(function (error) {
        console.log(error);
        alert(error.response.data.data.error);
      });
  };

  return (
    <div>
      <div>
        <h1 className="font-bold text-red-75 text-2xl">History Transaksi</h1>
        {data ? (
          <div>
            <h1>Status : {data.Status ? data.status : "Null"}</h1>
            <h1>Amount : {data.Amount ? data.Amount : "Null"}</h1>
            <h1>Created At : {data.User ? data.User.CreatedAt : "Null"}</h1>
          </div>
        ) : (
          <h1>Memuat Data...</h1>
        )}
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-red-75 text-2xl">Request Withdraw</h1>
        <div className="flex flex-col mt-5">
          <label>Amount</label>
          <input
            type="number"
            onChange={onChangeAmount}
            className="w-1/6 mr-6 appearance-none rounded relative px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label>Wallet</label>
          <input
            type="text"
            onChange={onChangeWallet}
            className="w-1/6 mr-6 appearance-none rounded relative px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
          />{" "}
        </div>
        <div className="flex flex-col mt-5">
          <label>Rekening</label>
          <input
            type="number"
            onChange={onChangeRekening}
            className="w-1/6 mr-6 appearance-none rounded relative px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
          />{" "}
        </div>

        <button
          onClick={handleWithdraw}
          className="mt-5 relative py-2 px-10 border border-transparent text-sm font-medium rounded-md text-white bg-red-300 focus:outline-none"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}
