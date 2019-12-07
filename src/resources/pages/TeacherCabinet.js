import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import { Button} from '@material-ui/core';
import {LoginFormComponent} from './Components/LoginFormComponent';
import {RegisterFormComponent} from './Components/RegisterFormComponent';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class TeacherCabinet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    setIsLogin(isLogin) {
        console.log(isLogin);
        this.setState({isLogin: isLogin});
    }

    render() {
        return (
            <div>
                <h1>Teacher cab</h1>

                <ul>
                    <li><Link to="/teacher">Info</Link></li>
                    <li><Link to="/teacher/timetable">Timetable</Link></li>
                    <li><Link to="/teacher/files">Files</Link></li>
                    <li><Link to="/teacher/registry">Registry</Link></li>
                </ul>

                <Route exact path="/teacher/">
                    <div>I'm Stepan</div>
                </Route>
                <Route path="/teacher/files">
                    <div>image.jpeg</div>
                </Route>
                <Route path="/teacher/timetable">
                    <div>Lesson at 14:00</div>
                </Route>
                <Route path="/teacher/registry">
                    <div>At 14:00 was a good lesson with Vadim.</div>
                </Route>
            </div>
        );
    }
}