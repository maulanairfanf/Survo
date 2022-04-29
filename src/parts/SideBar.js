import React from 'react';
import { Link } from 'react-router-dom';
import about from 'assets/icon/about.svg';
import pricing from 'assets/icon/pricing.svg';
import settings from 'assets/icon/settings.svg';
import statistics from 'assets/icon/statistics.svg';
import surveys from 'assets/icon/surveys.svg';
import { useLocation } from 'react-router-dom';

export default function SideBar() {
  const location = useLocation();

  const getNavLinkClass = path => {
    console.log(location.pathname, path);
    return location.pathname === path
      ? 'text-black bg-red-75 bg-opacity-50'
      : 'text-red-50';
  };

  const getNavLinkClassIcon = path => {
    return location.pathname === path ? 'text-red-300' : 'text-red-50';
  };

  return (
    <>
      <div className="container">
        <div className=" items-center m-3">
          <ul className={`my-5 ${getNavLinkClass('/surveys')}`}>
            <li className="w-full text-lg font-semibold flex ml-3 p-4">
              <svg
                className={`${getNavLinkClassIcon('/surveys')}`}
                width="25"
                height="28"
                viewBox="0 0 25 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4444 0V2.8H23.6208C24.3819 2.8 25 3.423 25 4.1902V26.6098C24.9996 26.9784 24.8542 27.3318 24.5956 27.5924C24.3371 27.853 23.9865 27.9996 23.6208 28H1.37917C1.0135 27.9996 0.662919 27.853 0.404355 27.5924C0.14579 27.3318 0.000367687 26.9784 0 26.6098V4.1902C0 3.423 0.618056 2.8 1.37917 2.8H5.55556V0H19.4444ZM5.55556 5.6H2.77778V25.2H22.2222V5.6H19.4444V8.4H5.55556V5.6ZM8.33333 19.6V22.4H5.55556V19.6H8.33333ZM8.33333 15.4V18.2H5.55556V15.4H8.33333ZM8.33333 11.2V14H5.55556V11.2H8.33333ZM16.6667 2.8H8.33333V5.6H16.6667V2.8Z"
                  fill="currentColor"
                />
              </svg>

              <Link className="ml-5 opacity-100" to="/surveys">
                Surveys
              </Link>
            </li>
          </ul>
          <ul className={`my-5 ${getNavLinkClass('/statistics')}`}>
            <li className="w-full text-lg font-semibold flex ml-3 p-4">
              {' '}
              <svg
                className={`${getNavLinkClassIcon('/statistics')}`}
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.63804 29H25.3668C26.3665 29 27.22 28.646 27.9273 27.938C28.6346 27.23 28.9883 26.3757 28.9883 25.375V3.625C28.9883 2.62435 28.6346 1.77002 27.9273 1.06201C27.22 0.354004 26.3665 0 25.3668 0H3.63804C2.63836 0 1.78487 0.354004 1.07755 1.06201C0.370234 1.77002 0.0165749 2.62435 0.0165749 3.625V25.375C0.0165749 26.3757 0.370234 27.23 1.07755 27.938C1.78487 28.646 2.63836 29 3.63804 29ZM19.9346 20.8438C19.9346 20.5983 20.0242 20.3859 20.2034 20.2065C20.3826 20.0272 20.5948 19.9375 20.84 19.9375H22.6507C22.8959 19.9375 23.1081 20.0272 23.2873 20.2065C23.4665 20.3859 23.5561 20.5983 23.5561 20.8438V24.4688C23.5561 24.7142 23.4665 24.9266 23.2873 25.106C23.1081 25.2853 22.8959 25.375 22.6507 25.375H20.84C20.5948 25.375 20.3826 25.2853 20.2034 25.106C20.0242 24.9266 19.9346 24.7142 19.9346 24.4688V20.8438ZM12.6917 13.5938C12.6917 13.3483 12.7813 13.1359 12.9605 12.9565C13.1397 12.7772 13.3519 12.6875 13.5971 12.6875H15.4078C15.653 12.6875 15.8652 12.7772 16.0444 12.9565C16.2236 13.1359 16.3132 13.3483 16.3132 13.5938V24.4688C16.3132 24.7142 16.2236 24.9266 16.0444 25.106C15.8652 25.2853 15.653 25.375 15.4078 25.375H13.5971C13.3519 25.375 13.1397 25.2853 12.9605 25.106C12.7813 24.9266 12.6917 24.7142 12.6917 24.4688V13.5938ZM5.44877 4.53125C5.44877 4.28581 5.53836 4.0734 5.71755 3.89404C5.89674 3.71468 6.10893 3.625 6.35414 3.625H8.16487C8.41007 3.625 8.62226 3.71468 8.80145 3.89404C8.98064 4.0734 9.07023 4.28581 9.07023 4.53125V24.4688C9.07023 24.7142 8.98064 24.9266 8.80145 25.106C8.62226 25.2853 8.41007 25.375 8.16487 25.375H6.35414C6.10893 25.375 5.89674 25.2853 5.71755 25.106C5.53836 24.9266 5.44877 24.7142 5.44877 24.4688V4.53125Z"
                  fill="currentColor"
                />
              </svg>
              <Link className="ml-5" to="/statistics">
                Statistics
              </Link>
            </li>
          </ul>
          <ul className={`my-5 ${getNavLinkClass('/pricing')}`}>
            <li className="w-full text-lg font-semibold flex ml-3 p-4">
              <svg
                className={`${getNavLinkClassIcon('/pricing')}`}
                width="31"
                height="25"
                viewBox="0 0 31 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 21.875C0 22.7378 0.694109 23.4375 1.55 23.4375H29.45C30.3059 23.4375 31 22.7378 31 21.875V6.25H0V21.875ZM21.7 11.7188C21.7 11.2871 22.0468 10.9375 22.475 10.9375H27.125C27.5532 10.9375 27.9 11.2871 27.9 11.7188V13.2812C27.9 13.7129 27.5532 14.0625 27.125 14.0625H22.475C22.0468 14.0625 21.7 13.7129 21.7 13.2812V11.7188ZM21.7 17.5781C21.7 17.3623 21.8734 17.1875 22.0875 17.1875H27.5125C27.7266 17.1875 27.9 17.3623 27.9 17.5781V18.3594C27.9 18.5752 27.7266 18.75 27.5125 18.75H22.0875C21.8734 18.75 21.7 18.5752 21.7 18.3594V17.5781ZM3.1 12.8906C3.1 12.6748 3.27341 12.5 3.4875 12.5H18.2125C18.4266 12.5 18.6 12.6748 18.6 12.8906V13.6719C18.6 13.8877 18.4266 14.0625 18.2125 14.0625H3.4875C3.27341 14.0625 3.1 13.8877 3.1 13.6719V12.8906ZM3.1 17.5781C3.1 17.3623 3.27341 17.1875 3.4875 17.1875H12.0125C12.2266 17.1875 12.4 17.3623 12.4 17.5781V18.3594C12.4 18.5752 12.2266 18.75 12.0125 18.75H3.4875C3.27341 18.75 3.1 18.5752 3.1 18.3594V17.5781ZM30.225 1.5625H0.775C0.346812 1.5625 0 1.91211 0 2.34375V4.6875H31V2.34375C31 1.91211 30.6532 1.5625 30.225 1.5625Z"
                  fill="currentColor"
                />
              </svg>
              <Link className="ml-5 " to="/pricing">
                Pricing
              </Link>
            </li>
          </ul>
          <ul className={`my-5 ${getNavLinkClass('/about')}`}>
            <li className="w-full text-lg font-semibold flex ml-3 p-4">
              {' '}
              <svg
                className={`${getNavLinkClassIcon('/about')}`}
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 34.6875L8.74589 23.184C8.61035 23.0112 8.47622 22.8374 8.34351 22.6625C6.67733 20.4677 5.77722 17.7869 5.78126 15.0312C5.78126 11.658 7.12127 8.42296 9.5065 6.03774C11.8917 3.65251 15.1268 2.3125 18.5 2.3125C21.8732 2.3125 25.1083 3.65251 27.4935 6.03774C29.8788 8.42296 31.2188 11.658 31.2188 15.0312C31.2228 17.7856 30.3231 20.4652 28.6577 22.659L28.6565 22.6625C28.6565 22.6625 28.3096 23.1181 28.2576 23.1793L18.5 34.6875ZM10.1889 21.2692C10.1912 21.2692 10.4595 21.6253 10.5207 21.7017L18.5 31.1124L26.4897 21.6889C26.5406 21.6253 26.8111 21.2669 26.8123 21.2658C28.1734 19.4725 28.9089 17.2825 28.9063 15.0312C28.9063 12.2713 27.8099 9.62447 25.8583 7.67292C23.9068 5.72137 21.2599 4.625 18.5 4.625C15.7401 4.625 13.0932 5.72137 11.1417 7.67292C9.19013 9.62447 8.09376 12.2713 8.09376 15.0312C8.09134 17.2839 8.82772 19.4752 10.19 21.2692H10.1889Z"
                  fill="currentColor"
                />
                <path
                  d="M24.2812 20.8125H21.9688V11.5625H15.0312V20.8125H12.7188V11.5625C12.7194 10.9494 12.9632 10.3615 13.3967 9.92799C13.8303 9.49445 14.4181 9.25061 15.0312 9.25H21.9688C22.5819 9.25061 23.1697 9.49445 23.6033 9.92799C24.0368 10.3615 24.2806 10.9494 24.2812 11.5625V20.8125Z"
                  fill="currentColor"
                />
                <path
                  d="M17.3438 18.5H19.6562V20.8125H17.3438V18.5Z"
                  fill="currentColor"
                />
                <path
                  d="M17.3438 13.875H19.6562V16.1875H17.3438V13.875Z"
                  fill="currentColor"
                />
              </svg>
              <Link className="ml-5 mt-1" to="/about">
                About
              </Link>
            </li>
          </ul>
          <ul className={`my-5 ${getNavLinkClass('/settings')}`}>
            <li className="w-full text-lg font-semibold flex ml-3 p-4">
              {' '}
              <svg
                className={`${getNavLinkClassIcon('/settings')}`}
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6532 25H10.1032C9.81807 25 9.54153 24.9026 9.3194 24.7239C9.09728 24.5452 8.94291 24.296 8.8819 24.0175L8.37315 21.6625C7.69447 21.3651 7.05094 20.9933 6.4544 20.5538L4.15815 21.285C3.88635 21.3717 3.59309 21.3628 3.32705 21.2598C3.06101 21.1568 2.83822 20.9659 2.69565 20.7188L0.415651 16.78C0.274583 16.5327 0.221629 16.2448 0.265454 15.9634C0.309279 15.6821 0.447287 15.424 0.656901 15.2313L2.43815 13.6063C2.35715 12.8701 2.35715 12.1274 2.43815 11.3912L0.656901 9.77C0.446991 9.57722 0.308795 9.31884 0.264963 9.03723C0.221131 8.75561 0.274263 8.46746 0.415651 8.22L2.69065 4.27875C2.83321 4.03164 3.05601 3.84074 3.32205 3.73773C3.58809 3.63473 3.88136 3.62583 4.15315 3.7125L6.4494 4.44375C6.7544 4.21875 7.0719 4.00875 7.3994 3.81875C7.71565 3.64125 8.04065 3.48 8.37315 3.33625L8.88315 0.98375C8.94387 0.705247 9.09794 0.45586 9.31983 0.276936C9.54173 0.0980123 9.81811 0.000299957 10.1032 0H14.6532C14.9382 0.000299957 15.2146 0.0980123 15.4365 0.276936C15.6584 0.45586 15.8124 0.705247 15.8732 0.98375L16.3882 3.3375C17.0664 3.63487 17.7096 4.00674 18.3057 4.44625L20.6031 3.715C20.8748 3.62865 21.1678 3.63771 21.4335 3.7407C21.6993 3.84369 21.9219 4.03441 22.0644 4.28125L24.3394 8.2225C24.6294 8.73125 24.5294 9.375 24.0982 9.77125L22.3169 11.3962C22.3979 12.1324 22.3979 12.8751 22.3169 13.6112L24.0982 15.2362C24.5294 15.6337 24.6294 16.2763 24.3394 16.785L22.0644 20.7262C21.9218 20.9734 21.699 21.1643 21.433 21.2673C21.167 21.3703 20.8737 21.3792 20.6019 21.2925L18.3057 20.5612C17.7096 21.0004 17.0664 21.3719 16.3882 21.6687L15.8732 24.0175C15.8122 24.2958 15.658 24.5449 15.4361 24.7236C15.2143 24.9022 14.938 24.9998 14.6532 25ZM6.90315 17.7863L7.92815 18.5363C8.1594 18.7063 8.3994 18.8625 8.6494 19.005C8.8844 19.1413 9.1244 19.2638 9.37315 19.375L10.5394 19.8862L11.1107 22.5H13.6482L14.2194 19.885L15.3857 19.3738C15.8944 19.1488 16.3782 18.87 16.8269 18.5413L17.8519 17.7913L20.4044 18.6037L21.6732 16.4062L19.6944 14.6025L19.8344 13.3375C19.8969 12.7838 19.8969 12.225 19.8344 11.6725L19.6944 10.4075L21.6744 8.6L20.4044 6.40125L17.8532 7.21375L16.8269 6.46375C16.3779 6.13336 15.8947 5.85217 15.3857 5.625L14.2194 5.11375L13.6482 2.5H11.1107L10.5357 5.115L9.37315 5.625C8.86338 5.84826 8.38 6.12747 7.9319 6.4575L6.90565 7.2075L4.35565 6.395L3.0844 8.6L5.06315 10.4012L4.92315 11.6675C4.86065 12.2212 4.86065 12.78 4.92315 13.3325L5.06315 14.5975L3.0844 16.4013L4.35315 18.5987L6.90315 17.7863ZM12.3732 17.5C11.0471 17.5 9.7753 16.9732 8.83762 16.0355C7.89994 15.0979 7.37315 13.8261 7.37315 12.5C7.37315 11.1739 7.89994 9.90215 8.83762 8.96447C9.7753 8.02678 11.0471 7.5 12.3732 7.5C13.6992 7.5 14.971 8.02678 15.9087 8.96447C16.8464 9.90215 17.3732 11.1739 17.3732 12.5C17.3732 13.8261 16.8464 15.0979 15.9087 16.0355C14.971 16.9732 13.6992 17.5 12.3732 17.5ZM12.3732 10C11.8836 10.0005 11.405 10.1447 10.9966 10.4148C10.5883 10.6848 10.2682 11.0688 10.0762 11.5191C9.88407 11.9694 9.82843 12.4662 9.91612 12.9478C10.0038 13.4295 10.231 13.8747 10.5695 14.2284C10.9079 14.5821 11.3428 14.8287 11.8201 14.9375C12.2974 15.0463 12.7962 15.0125 13.2545 14.8405C13.7128 14.6684 14.1105 14.3655 14.3982 13.9694C14.686 13.5734 14.8511 13.1016 14.8732 12.6125V13.1125V12.5C14.8732 11.837 14.6098 11.2011 14.1409 10.7322C13.6721 10.2634 13.0362 10 12.3732 10Z"
                  fill="currentColor"
                />
              </svg>
              <Link className="ml-5" to="/settings">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}