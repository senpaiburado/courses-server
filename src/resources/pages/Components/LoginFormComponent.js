import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import { Button, FormLabel } from '@material-ui/core';
import { RegisterFormComponent } from './RegisterFormComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Cookie from "universal-cookie";

export class LoginFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            email: '',
            password: '',
            authProccesing: false
        }
        this.cookies = new Cookie();
    }

    onRouteToRegister() {
        this.props.onRouteToRegister();
    }

    onLoginButtonClicked = async () => {
        this.setState({ authProccesing: true });
        try {
            var response = await fetch("http://localhost:8080/user/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            });
            console.log(response);
            if (response.ok) {
                let json = await response.json();
                console.log(json);
            } else {
                if (response.status === 404)
                    this.setState({error: "Аккаунт с указаной почтой не существует!"});
                else if (response.status === 403)
                    this.setState({error: "Неверный пароль!"});
                else
                    this.setState({error: response.statusText});
            }
        } catch (ex) {
            console.log(ex);
        }
    }

    ErrorBlock = () => {
        return (
            <div className="formGroup">
                <div style={{ margin: "auto" }}>
                    <FormLabel label="Ім'я" margin="normal" variant="outlined" type="text" style={{ color: "#f44336", fontSize:"10pt" }}>
                        {this.state.error}
                    </FormLabel>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Card id="loginForm">
                <div className="authHeader">
                    <span>АВТОРИЗАЦИЯ</span>
                </div>
                <div className="loginGroup" style={{ width: "100%" }}>
                    {this.state.error ? <this.ErrorBlock/> : ""}
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}><TextField label="Електронна пошта" margin="normal" variant="outlined" type="email" name="email"
                            onChange={(event) => { this.setState({ email: event.target.value }) }} required disabled={this.state.authProccesing} /></div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}><TextField label="Пароль" margin="normal" variant="outlined" type="password" hintText="Password"
                            floatingLabelText="Password" name="password" required onChange={(event) => { this.setState({ password: event.target.value }) }} disabled={this.state.authProccesing} /></div>
                    </div>
                    <div className="formGroup">
                        <Button variant="contained" disabled={this.state.authProccesing} onClick={this.onLoginButtonClicked}>
                            {this.state.authProccesing ? "Вход..." : "Ввойти"}
                        </Button>

                    </div>
                    <div className="formGroup">
                        <p>
                            <Button className="login-button-another-action" onClick={() => { }}>Забыли пароль?</Button>
                            <Button className="login-button-another-action" onClick={() => { this.onRouteToRegister() }}>Регистрация</Button>
                        </p>
                    </div>
                </div>
            </Card>
        );
    }
}