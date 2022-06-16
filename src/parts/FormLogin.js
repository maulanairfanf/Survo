import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect, Route } from "react-router";

export default function FormLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const axios = require("axios");
  const history = useHistory();

  function submit(e) {
    e.preventDefault();

    const data = JSON.stringify({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    console.log(data);
    const config = {
      method: "post",
      url: "http://159.65.142.138/api/v1/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.status);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("fullname", response.data.data.fullName);
          localStorage.setItem("email", response.data.data.email);
          history.push("/surveys");
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
        setError("username atau password yang dimasukkan salah");
      });
  }
  return (
    <form
      className="mt-8 space-y-6 w-3/4 mx-auto"
      onSubmit={submit}
      method="post"
    >
      <div className="rounded-md shadow-sm ">
        {error && (
          <div className="text-center">
            <span className=" text-red-300 font-bold">{error}</span>
          </div>
        )}
        <div className="mb-2">
          {/* <label for="email-address">Email address</label> */}
          <input
            id="email"
            name="email"
            type="email"
            ref={emailRef}
            required
            className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          {/* <label for="password">Password</label> */}
          <input
            id="password"
            ref={passwordRef}
            name="password"
            type="password"
            required
            className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none  focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="flex justify-center ">
        <button
          type="submit"
          className=" relative  py-2 px-16 border border-transparent text-sm font-medium rounded-md text-white bg-red-300 focus:outline-none"
        >
          Login
        </button>
      </div>
    </form>
  );
}
