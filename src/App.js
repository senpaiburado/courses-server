
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
import { ChildrenCabinet } from "./resources/pages/ChildrenCabinet";
import { Video,VideoR } from "./resources/pages/Components/Video";

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
          <Route path="/student">
            <ChildrenCabinet/>
          </Route>
          <Route path="/video">
            <Video/>
          </Route>
          <Route path="/videoR">
            <VideoR/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}