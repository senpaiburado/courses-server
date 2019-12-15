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

export class AuthPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
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
