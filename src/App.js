import React from "react";
import "assets/css/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "parts/Navbar";
import SideBar from "parts/SideBar";
import LandingPage from "pages/LandingPage";
import Login from "pages/Login";
import About from "pages/About";
import Home from "pages/Home";
import Pricing from "pages/Pricing";
import Register from "pages/Register";
import Terms from "pages/Terms";
import Settings from "pages/Settings";
import Statistics from "pages/Statistics";
import EditProfile from "pages/EditProfile";
import Surveys from "pages/Surveys";
import CreateSurvey from "pages/CreateSurvey";
import AnswerSurvey from "pages/AnswerSurvey";
import History from "pages/History";
import MySurvey from "pages/MySurvey";
import DetailSurvey from "pages/DetailSurvey";
import DetailAnswer from "pages/DetailAnswer";
import { getToken } from "helpers/common.js";
import PrivateRoute from "helpers/PrivateRoute";
import PublicRoute from "helpers/PublicRoute";
function App() {
  const token = getToken();

  return (
    <>
      <Router>
        <Navbar />
        <div className="flex ">
          {token ? (
            <div style={{ width: 400 }} className="z-50 bg-white">
              <SideBar />
            </div>
          ) : (
            ""
          )}

          <div className="w-full z-2">
            <Switch>
              <PublicRoute path="/login" component={Login} />{" "}
              <PrivateRoute path="/edit-profile" component={EditProfile} />
              <PublicRoute path="/register" component={Register} />
              <PrivateRoute path="/about" component={About} />{" "}
              <PrivateRoute path="/surveys" component={Surveys} />
              <PrivateRoute
                path="/createsurvey"
                component={CreateSurvey}
              />{" "}
              <PrivateRoute path="/answersurvey/:id" component={AnswerSurvey} />{" "}
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/history" component={History} />
              <PrivateRoute path="/pricing" component={Pricing} />
              <PrivateRoute path="/terms" component={Terms} />
              <PrivateRoute path="/settings" component={Settings} />
              <PrivateRoute path="/statistics" component={Statistics} />
              <PrivateRoute path="/mysurvey" component={MySurvey} />
              <PrivateRoute path="/detailsurvey/:id" component={DetailSurvey} />
              <PrivateRoute path="/detailanswer/:id" component={DetailAnswer} />
              <PublicRoute exact path="/" component={LandingPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
