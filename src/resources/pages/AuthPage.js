/* eslint-disable no-restricted-globals */
import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import { Button, Link } from '@material-ui/core';
import {LoginFormComponent} from './Components/LoginFormComponent';
import {RegisterFormComponent} from './Components/RegisterFormComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,

  } from "react-router-dom";

import '../css/auth.css';
import Cookies from 'universal-cookie';

export class AuthPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
        let cookies = new Cookies().get("cookies");
        console.log(cookies);
        // if (cookies) {
        //     cookies.isStudent ? location.href = "/teacher" : location.href = "/student";
        // }
    }

    setIsLogin(isLogin) {
        console.log(isLogin);
        this.setState({isLogin: isLogin});
    }

    render() {
        return (
            <div id="mainDiv">
                { this.state.isLogin ? <LoginFormComponent onRouteToRegister={() => {this.setIsLogin(false)}}/> :
                     <RegisterFormComponent onRouteToLogin={() => {this.setIsLogin(true)}}/>}
            </div>
        );
    }
}
