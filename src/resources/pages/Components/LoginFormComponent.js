import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import {RegisterFormComponent} from './RegisterFormComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";

export class LoginFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            email: '',
            password: ''
        }
    }

    onRouteToRegister() {
        console.log("llllooooll");
        this.props.onRouteToRegister();
    }

    render() {
        return (
            <Card id="loginForm">
                <div className="authHeader">
                    <span>АВТОРИЗАЦІЯ</span>
                </div>
                <div className="loginGroup" style={{ width: "100%" }}>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}><TextField label="Електронна пошта" margin="normal" variant="outlined" type="email" name="email"
                            onChange={(event) => {this.setState({email: event.target.value})}} required /></div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}><TextField label="Пароль" margin="normal" variant="outlined" type="password" hintText="Password"
    floatingLabelText="Password" name="password" required onChange={(event) => { this.setState({password: event.target.value}) }}/></div>
                    </div>
                    <div className="formGroup">
                        <Button variant="contained" >Ввійти</Button>
                    </div>
                    <div className="formGroup">
                        <p>
                            <Button className="login-button-another-action" onClick={() => {  }}>Забули пароль?</Button>
                            <Button className="login-button-another-action" onClick={() => { this.onRouteToRegister() }}>Реєстрація</Button>
                        </p>
                    </div>
                </div>
            </Card>
        );
    }
}