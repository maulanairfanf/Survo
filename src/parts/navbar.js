import React, { useState, useEffect, useRef } from 'react';
import Logo from 'assets/images/Logo.png';
import { Link } from 'react-router-dom';
import profile from 'assets/images/black_hole.jpg';
import notif from 'assets/icon/Notification_icon.png';

export default function Navbar() {
  const ref = useRef();
  const refProfile = useRef();

  const [show, setShow] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
      if (
        showProfile &&
        refProfile.current &&
        !refProfile.current.contains(e.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [show, showProfile]);
  return (
    <div className="mx-5 pt-2 flex justify-between">
      <div className="">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <h1 className="font-semibold text-small mr-4">Welcome, Aninda</h1>
        <div ref={refProfile} className="z-50">
          <img
            src={profile}
            onClick={() => setShowProfile(showProfile => !showProfile)}
            alt=""
            style={{ width: 47, height: 47 }}
            className="mx-auto rounded-full mr-4 object-cover cursor-pointer"
          />{' '}
          {showProfile && (
            <div className="fixed right-12 mr-10 mt-5 border p-1 bg-white rounded-lg">
              <button className="text-xs px-6 py-3 mb-1 flex justify-between">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 13.986C28 6.265 21.728 0 14 0C6.272 0 0 6.265 0 13.986C0 18.2385 1.932 22.071 4.956 24.6435C4.984 24.6715 5.012 24.6715 5.012 24.6995C5.264 24.8955 5.516 25.0915 5.796 25.2875C5.936 25.3715 6.048 25.4818 6.188 25.5938C8.50162 27.1624 11.2327 28.0006 14.028 28C16.8233 28.0006 19.5544 27.1624 21.868 25.5938C22.008 25.5098 22.12 25.3995 22.26 25.3138C22.512 25.1195 22.792 24.9235 23.044 24.7275C23.072 24.6995 23.1 24.6995 23.1 24.6715C26.068 22.0693 28 18.2385 28 13.986ZM14 26.2378C11.368 26.2378 8.96 25.3977 6.972 23.9995C7 23.7755 7.056 23.5533 7.112 23.3293C7.27884 22.7222 7.52354 22.1393 7.84 21.595C8.148 21.063 8.512 20.587 8.96 20.167C9.38 19.747 9.884 19.3568 10.388 19.0487C10.92 18.7408 11.48 18.5168 12.096 18.3487C12.7168 18.1814 13.3571 18.0973 14 18.0985C15.9086 18.085 17.7471 18.8171 19.124 20.139C19.768 20.783 20.272 21.539 20.636 22.4053C20.832 22.9093 20.972 23.4412 21.056 23.9995C18.9896 25.4523 16.526 26.2337 14 26.2378ZM9.716 13.2878C9.46929 12.7229 9.34522 12.1121 9.352 11.4957C9.352 10.8815 9.464 10.2655 9.716 9.7055C9.968 9.1455 10.304 8.64325 10.724 8.22325C11.144 7.80325 11.648 7.469 12.208 7.217C12.768 6.965 13.384 6.853 14 6.853C14.644 6.853 15.232 6.965 15.792 7.217C16.352 7.469 16.856 7.805 17.276 8.22325C17.696 8.64325 18.032 9.14725 18.284 9.7055C18.536 10.2655 18.648 10.8815 18.648 11.4957C18.648 12.1397 18.536 12.7277 18.284 13.286C18.0408 13.8377 17.6992 14.3406 17.276 14.77C16.8464 15.1926 16.3436 15.5336 15.792 15.7763C14.6349 16.2517 13.3371 16.2517 12.18 15.7763C11.6284 15.5336 11.1256 15.1926 10.696 14.77C10.2722 14.3468 9.93876 13.8419 9.716 13.286V13.2878ZM22.708 22.5732C22.708 22.5173 22.68 22.4893 22.68 22.4333C22.4046 21.5572 21.9987 20.7277 21.476 19.9727C20.9528 19.2122 20.3098 18.5414 19.572 17.9865C19.0085 17.5626 18.3978 17.2056 17.752 16.9225C18.0458 16.7287 18.318 16.504 18.564 16.2522C18.9814 15.8401 19.3481 15.3795 19.656 14.8803C20.2761 13.8614 20.5964 12.6884 20.58 11.4957C20.5887 10.6129 20.4172 9.73756 20.076 8.92325C19.7392 8.13862 19.2543 7.42622 18.648 6.825C18.0426 6.23005 17.33 5.75503 16.548 5.425C15.7323 5.08444 14.8559 4.91355 13.972 4.92275C13.088 4.9141 12.2115 5.08559 11.396 5.42675C10.6072 5.75608 9.89294 6.24117 9.296 6.853C8.70107 7.45778 8.22604 8.16973 7.896 8.95125C7.55484 9.76556 7.38334 10.6409 7.392 11.5238C7.392 12.1398 7.476 12.7277 7.644 13.286C7.812 13.874 8.036 14.406 8.344 14.9082C8.624 15.4123 9.016 15.8603 9.436 16.2803C9.688 16.5323 9.968 16.7545 10.276 16.9505C9.62821 17.2411 9.01726 17.6077 8.456 18.0425C7.728 18.6025 7.084 19.2727 6.552 20.0007C6.02395 20.7526 5.61764 21.5829 5.348 22.4613C5.32 22.5173 5.32 22.5732 5.32 22.6012C3.108 20.363 1.736 17.3425 1.736 13.986C1.736 7.245 7.252 1.73425 14 1.73425C20.748 1.73425 26.264 7.245 26.264 13.986C26.2603 17.2059 24.9818 20.2934 22.708 22.5732Z"
                    fill="#7E1515"
                  />
                </svg>
                <Link to="/edit-profile" className="text-lg ml-4">
                  Edit Profile
                </Link>
              </button>
              <hr />
              <button className="text-xs px-8 py-3 mb-1 flex justify-around">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_35_1441)">
                    <path
                      d="M19.1908 7.27378L24.6074 12.6905L19.1908 18.1071M14.8574 9.44045V1.85712H1.85742V23.5238H14.8574V15.9405V9.44045ZM24.6074 12.6905H6.19075H24.6074Z"
                      stroke="#7E1515"
                      stroke-width="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_35_1441">
                      <rect width="26" height="26" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-lg ml-4">Logout</p>
              </button>
            </div>
          )}
        </div>
        <div ref={ref} className="z-50">
          <img
            onClick={() => setShow(show => !show)}
            className="cursor-pointer"
            src={notif}
            alt=""
            style={{ width: 47, height: 47 }}
          />
          {show && (
            <div className="fixed right-5 mt-5 border p-1 z-index-50 bg-white ">
              <ul>
                <li className="text-xs px-8 py-3 bg-red-25 mb-1">
                  <p className="text-red-300">New Response</p>
                  <p className="">Hi Aninda</p>
                  <p className="text-light ">Sierra just fill in your survey</p>
                </li>
                <li className="text-xs px-8 py-3 bg-red-25 mb-1">
                  <p className="text-red-300">New Response</p>
                  <p className="">Hi Aninda</p>
                  <p className="text-light ">Sierra just fill in your survey</p>
                </li>
                <li className="text-xs px-8 py-3 bg-red-25 mb-1">
                  <p className="text-red-300">New Response</p>
                  <p className="">Hi Aninda</p>
                  <p className="text-light ">Sierra just fill in your survey</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* <div className="flex justify-between items-center">
            <ul className="mx-3">
                <li className="text-red-300 text-small"><Link to="/home">Home</Link></li>
            </ul>
            <ul className="mx-3">
                <li className="text-red-300 text-small"><Link to="/login">About US</Link></li>
            </ul>
            <ul className="mx-3">
                <li className="text-red-300 text-small"><Link to="/pricing">Pricing</Link></li>
            </ul>
            <ul className="mx-3">
                <li className="text-red-300 text-small font-bold"><Link to="/login">Login/Register</Link></li>
            </ul>
        </div> */}
    </div>
  );
}
