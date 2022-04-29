import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Faq from 'parts/FAQ';
import Introduction from 'parts/Introduction';
import Partners from 'parts/Partners';
import { useLocation } from 'react-router-dom';

export default function About() {
  // const location = useLocation();
  // console.log(location);
  // const getLink = path => {
  //   return location.pathname === path ? 'text-red-400' : 'text-gray-100';
  // };
  function PushClass(para) {
    return para === window.location.pathname ? 'text-red-400' : 'text-gray-100';
  }

  function GetTab(params) {
    PushClass(params);
  }
  return (
    <>
      <Router>
        <div className="flex justify-around mt-4 text-4xl">
          <button onClick={() => GetTab('/introduction')}>
            <Link
              to="/introduction"
              className={`${PushClass('/introduction')}`}
            >
              <span className={`${PushClass('/introduction')}`}>
                Introduction
              </span>
            </Link>
          </button>
          <button onClick={() => GetTab('/faq')}>
            <Link to="/faq" className={`${PushClass('/faq')}`}>
              <span className={`${PushClass('/faq')}`}>FAQ</span>
            </Link>
          </button>
          <button onClick={() => GetTab('/partners')}>
            <Link to="/partners" className={`${PushClass('/partners')}`}>
              <span className={`${PushClass('/partners')}`}>Partners</span>
            </Link>
          </button>
        </div>
        <Switch>
          <Route exact path="/introduction" component={Introduction} />
          <Route path="/faq" component={Faq} />
          <Route path="/partners" component={Partners} />
        </Switch>
      </Router>
    </>
  );
}
