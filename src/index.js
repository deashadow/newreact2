import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
/*import App from "./App";*/
import * as serviceWorker from "./serviceWorker";
import ToDo from "./ToDo";
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import BootstrapNavBar from './BootstrapNavBar'
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ToDo />, <BootstrapNavBar/>, <AboutUs/>, <ContactUs/>,
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
