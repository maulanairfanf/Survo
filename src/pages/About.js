import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Faq from 'parts/FAQ';
import Introduction from 'parts/Introduction';
import Partners from 'parts/Partners';

export default function About() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = index => setActiveIndex(index);
  const checkActive = index =>
    activeIndex === index ? 'text-red-400 border-b-2' : 'text-gray-100';

  return (
    <>
      <Router>
        <div className="flex justify-around mt-20 text-4xl ">
          <button
            className={`font-semibold ${checkActive(1)}`}
            onClick={() => handleClick(1)}
          >
            <Link to="/about/introduction">Introduction</Link>
          </button>
          <button
            className={`font-semibold ${checkActive(2)}`}
            onClick={() => handleClick(2)}
          >
            <Link to="/about/faq">FAQ</Link>
          </button>
          <button
            className={`font-semibold ${checkActive(3)}`}
            onClick={() => handleClick(3)}
          >
            <Link to="/about/partners">Partners</Link>
          </button>
        </div>
        <Switch>
          <Route path="/about/introduction" component={Introduction} />
          <Route path="/about/faq" component={Faq} />
          <Route path="/about/partners" component={Partners} />
        </Switch>
      </Router>
    </>
  );
}
