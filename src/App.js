
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // eslint-disable-next-line  
  Link
} from "react-router-dom";
import Home from './resources/pages/Home';
import {AuthPage} from './resources/pages/AuthPage';
import { TeacherCabinet } from "./resources/pages/TeacherCabinet";

export default function App() {
  return (  
    <Router>
        {/* <Home></Home> */}

        <Switch>
          <Route path="/auth"> 
            <AuthPage/>
          </Route>
          <Route path="/teacher">
            <TeacherCabinet/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}