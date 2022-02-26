import React from 'react';
import 'assets/css/style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from 'parts/navbar'

import LandingPage from 'pages/LandingPage'
import Login from 'pages/Login'
import About from 'pages/About'
import Home from 'pages/Home'
import Pricing from 'pages/Pricing'
import Register from 'pages/Register'



function App() {
  return (
    <>
       <Router>
         <Navbar/>
         <Switch>
           <Route path="/login" component={Login}/>
           <Route path="/register" component={Register}/>
           <Route path="/about" component={About}/>
           <Route path="/home" component={Home}/>
           <Route path="/pricing" component={Pricing}/>
           <Route exact path="/landingpage" component={LandingPage}/>
         </Switch>
       </Router>
    </>
  );
}

export default App;
