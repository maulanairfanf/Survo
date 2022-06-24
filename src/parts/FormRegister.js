import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

export default function FormRegister() {
  const fullNameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const emailRef = useRef();
  const occupationRef = useRef();
  const usernameRef = useRef();
  const axios = require("axios");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(passwordRef.current.value, passwordConfirmRef.current.value);
    if (passwordRef.current.value != passwordConfirmRef.current.value) {
      setError("Password dan Confirm Password Tidak Sama");
    } else {
      setError("");
      var data = JSON.stringify({
        fullName: fullNameRef.current.value,
        email: emailRef.current.value,
        username: usernameRef.current.value,
        occupation: occupationRef.current.value,
        password: passwordRef.current.value,
        passwordConfirmation: passwordConfirmRef.current.value,
      });
      console.log(data);

      var config = {
        method: "post",
        url: "https://survo-app.herokuapp.com/api/v1/register",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(response.status);
          if (response.status === 201) {
            history.push("/login");
            window.location.reload();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <form
      className="mt-8 space-y-6 w-3/4 mx-auto"
      onSubmit={handleSubmit}
      method="POST"
    >
      {" "}
      {error && (
        <div className="text-center">
          <span className=" text-red-300 font-bold">{error}</span>
        </div>
      )}
      <div className="rounded-md shadow-sm ">
        <div className="mb-2">
          <label>Full Name</label>
          <input
            ref={fullNameRef}
            name="name"
            type="name"
            required
            className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
            placeholder="full name"
          />
        </div>
        <div className="mb-2">
          <label>Email</label>
          <input
            ref={emailRef}
            name="email"
            type="email"
            required
            className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none  focus:z-10 sm:text-sm"
            placeholder="Email"
          />
        </div>
        <div className="mb-2">
          <label>Username</label>
          <input
            ref={usernameRef}
            name="username"
            type="username"
            required
            className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none  focus:z-10 sm:text-sm"
            placeholder="Username"
          />
        </div>
        <div className="mb-2">
          <label>Occupation</label>
          <input
            ref={occupationRef}
            name="occupation"
            type="text"
            required
            className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none  focus:z-10 sm:text-sm"
            placeholder="Occupation"
          />
        </div>
        <div className="mb-2">
          <label>Password</label>
          <input
            ref={passwordRef}
            name="Password"
            autocomplete="on"
            type="password"
            placeholder="Password"
            className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none  focus:z-10 sm:text-sm"
          />
        </div>
        <div className="mb-2">
          <label>Confirm Password</label>
          <input
            ref={passwordConfirmRef}
            autocomplete="on"
            name="Confirm Password"
            type="password"
            placeholder="confirm password"
            className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none  focus:z-10 sm:text-sm"
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <button
          type="submit"
          className=" relative  py-2 px-16 border border-transparent text-sm font-medium rounded-md text-white bg-red-300 focus:outline-none"
        >
          Register
        </button>
      </div>
    </form>
  );
}
