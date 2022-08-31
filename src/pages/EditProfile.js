import React, { useState, useRef, useEffect } from "react";
import profile from "assets/images/black_hole.jpg";
import { getToken } from "helpers/common.js";
import jwt from "jwt-decode";

export default function EditProfile() {
  const [error, setError] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [image, setImage] = useState("");
  const [newData, setNewData] = useState("");
  const [user, setUser] = useState("");

  const token = getToken();
  const jwtToken = jwt(token);
  const iduser = jwtToken.user_id;
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const passwordConfirmationRef = useRef();
  const phoneRef = useRef();
  const birthdayRef = useRef();

  useEffect(() => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: `https://survo-app.herokuapp.com/api/v1/profile/${iduser}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data.image_path);
        setImage(
          "https://survo-app.herokuapp.com/" + response.data.data.image_path
        );
      })
      .catch(function (error) {
        console.log(error);
      });

    var config2 = {
      method: "get",
      url: `https://survo-app.herokuapp.com/api/v1/profile/${iduser}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config2)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setUser(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleUpload = (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("image", selectedFile);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://survo-app.herokuapp.com/api/v1/upload/2", requestOptions)
      .then((response) => window.location.reload())
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = (e) => {
    console.log("Submit");
    const axios = require("axios");

    const data = JSON.stringify({
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value,
      phone: phoneRef.current.value,
      birthday: birthdayRef.current.value,
    });

    if (
      fullNameRef.current.value != "" &&
      emailRef.current.value != "" &&
      usernameRef.current.value != "" &&
      passwordRef.current.value != "" &&
      passwordConfirmationRef.current.value != "" &&
      phoneRef.current.value != "" &&
      birthdayRef.current.value != ""
    ) {
      if (passwordRef.current.value == passwordConfirmationRef.current.value) {
        const configUpdate = {
          method: "put",
          url: `https://survo-app.herokuapp.com/api/v1/update/${iduser}`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(configUpdate)
          .then(function (response) {
            if (response.status === 200) {
              console.log(response.data.data);
              setError("");
              alert("Berhasil Update Profile");
              window.location.reload();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        setError("password tidak sama");
      }
    } else {
      setError("Harus terisi semua");
    }
  };

  return (
    <>
      <div className="flex w-full justify-around mt-5">
        <div className="w-full m-5">
          <div className="flex items-center mb-10">
            <button className="mr-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 16C30 13.2311 29.1789 10.5243 27.6406 8.22202C26.1022 5.91973 23.9157 4.12532 21.3576 3.06569C18.7994 2.00606 15.9845 1.72881 13.2687 2.26901C10.553 2.8092 8.05844 4.14257 6.1005 6.10051C4.14257 8.05844 2.8092 10.553 2.26901 13.2687C1.72881 15.9845 2.00606 18.7994 3.06569 21.3576C4.12531 23.9157 5.91973 26.1022 8.22202 27.6406C10.5243 29.1789 13.2311 30 16 30C19.713 30 23.274 28.525 25.8995 25.8995C28.525 23.274 30 19.713 30 16ZM24 17L11.85 17L17.43 22.607L16 24L8 16L16 8L17.43 9.427L11.85 15L24 15L24 17Z"
                  fill="black"
                />
              </svg>{" "}
            </button>{" "}
            <p className="font-bold text-3xl"> Edit Profile </p>{" "}
          </div>{" "}
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-8">
              <label className="text-red-300"> Full Name </label>{" "}
              <input
                ref={fullNameRef}
                name="name"
                type="name"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder={user.fullName}
              />
            </div>{" "}
            <div className="mb-8">
              <label className="text-red-300"> Email Address </label>{" "}
              <input
                ref={emailRef}
                name="email"
                type="email"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder={user.email}
              />
            </div>{" "}
            <div className="mb-8">
              <label className="text-red-300"> Username </label>{" "}
              <input
                ref={usernameRef}
                name="username"
                type="username"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder={user.username}
              />
            </div>{" "}
            <div className="mb-8">
              <label className="text-red-300"> Password </label>{" "}
              <input
                ref={passwordRef}
                name="password"
                type="password"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>{" "}
            <div className="mb-8">
              <label className="text-red-300"> Confirm Password </label>{" "}
              <input
                ref={passwordConfirmationRef}
                name="password"
                type="password"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>{" "}
          </form>{" "}
        </div>{" "}
        <div className="w-full m-5">
          <img
            src={image ? image : profile}
            alt="profile"
            style={{ width: 259, height: 259 }}
            className=" mx-auto rounded-full object-cover cursor-pointer"
          />
          <div>
            <div className="mb-4">
              <label className="text-red-300"> Profile </label>{" "}
              <input
                name="image"
                type="file"
                required
                onChange={changeHandler}
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              />
            </div>{" "}
            <button
              className="px-8 py-1 bg-red-300 text-white rounded-lg mb-4"
              onClick={handleUpload}
            >
              Upload File
            </button>{" "}
            <div className="mb-8">
              <label className="text-red-300"> Phone Number </label>{" "}
              <input
                ref={phoneRef}
                name="number"
                type="number"
                required
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
                placeholder={user.phone}
              />
            </div>{" "}
            <div className="mb-8">
              <label className="text-red-300"> Date of Birth </label>{" "}
              <input
                ref={birthdayRef}
                name="date"
                type="date"
                required
                placeholder={user.birthday}
                className="appearance-none rounded relative w-full px-3 py-2 border border-red-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:z-10 sm:text-sm"
              />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {error && (
        <div className="text-center mb-4">
          <span className=" text-red-300 font-bold">{error}</span>
        </div>
      )}
      <div className="w-full flex justify-center">
        <button
          className="px-20 py-2 bg-red-300 text-white rounded-lg"
          onClick={handleSubmit}
        >
          Save{" "}
        </button>{" "}
      </div>{" "}
    </>
  );
}
