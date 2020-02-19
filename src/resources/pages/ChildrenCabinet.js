/* eslint-disable no-restricted-globals */
import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import { LoginFormComponent } from './Components/LoginFormComponent';
import { RegisterFormComponent } from './Components/RegisterFormComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "../css/TeacherCabinet.css"

import { Profile } from "./Components/Profile";
import { Timetable } from "./Components/Timetable";
import { Files } from "./Components/Files";
import { Homework } from "./Components/Homework";
import { VideoR,Video } from "./Components/Video";
import Cookies from 'universal-cookie';

export class ChildrenCabinet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpened: false
        }
        // new Cookies().remove("cookies")
    }

    open() {

    }
    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <div className="headline2 ">
                    <div className="box1">

                        <div className={`containerM ${this.state.isMenuOpened ? "change" :''}`} onClick={() => { this.setState({ isMenuOpened: !this.state.isMenuOpened }) }}
                            style={{width: "auto"}}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>


                    {this.state.isMenuOpened ? (<div id="mySidenav" className="">
                        <div className="tabcontent ">
                       
                            <p className=" tabcontent-text "><a href="#">ПРОФИЛЬ</a></p>
                            <p className=" tabcontent-text "><a href="#">РАСПИСАНИЕ</a></p>
                            <p className=" tabcontent-text "><a href="#">МАТЕРИАЛЫ</a></p>
                            <p className=" tabcontent-text "><a href="#">ЖУРНАЛ</a></p>
                        </div>
                    </div>) : ''}
                    <div className="menu">
                        <Link to="/student">
                            <div className="menu1 iconProfile"></div>
                        </Link>
                        <Link to="/student/timetable">
                            <div className="menu1 iconTimeTable"></div>
                        </Link>
                        <Link to="/student/files">
                            <div className="menu1 iconFile"></div>
                        </Link> 
                        <Link to="/student/homework" >
                            <div className="menu1 iconRegistry"></div>
                        </Link>
                        <Link to="/student/Video" >
                            <div className="menu1 iconRegistry"></div>
                        </Link>
                    </div>
                    <Link to="/student/homework" >
                    <div className="exit1 menu2" onClick={ () => { location.href = "/" } }></div>
                    </Link>
                </div>
                <Switch>
                    <Route exact path="/student">
                        <Profile />
                    </Route>
               
                    <Route path="/student/timetable">
                        <Timetable />
                    </Route>
                    <Route path="/student/files">
                        <Files />
                    </Route>
                    <Route path="/student/homework">
                        <Homework />
                    </Route>
                    <Route path="/student/Video"></Route>
                </Switch>

            </div>
        );
    }
}