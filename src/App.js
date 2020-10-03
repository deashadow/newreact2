import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ToDo from './ToDo';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import NavB from './NavB';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


 function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavB/>
       <Switch>
        <Route path="/ToDo" exact component={ToDo}/>
        <Route path="/AboutUs" component={AboutUs}/>
        <Route path="/ContactUs" component={ContactUs}/>
      </Switch>
     </div>
     </BrowserRouter>
  )
}
export default App;


