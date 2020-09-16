import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import Signup from "./components/signup.component";
import Signin from "./components/signin.component";
import GetAll from "./components/getall.component";
import Edit from "./components/edit.component";
import Home from "./components/home.component";

class App extends Component {
 render() {
  return (
    <Router>
      <Switch>
           <Route exact path={["/products"]} component={TutorialsList} />
           <Route exact path="/add" component={AddTutorial} />
           <Route exact path="/tutorials/:id" component={Tutorial} />
           <Route exact path="/" component={Home} />
           <Route exact path="/signup" component={Signup} />
           <Route exact path={["/signin"]} component={Signin} />
           <Route exact path="/getall" component={GetAll} />
           <Route exact path="/edit/:id" component={Edit} />
      </Switch>
    </Router>
  );
 }
}

export default App;
