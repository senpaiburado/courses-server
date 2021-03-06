import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import { Button, FormLabel } from '@material-ui/core';
import { RegisterFormComponent } from './RegisterFormComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    withRouter
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
        this.setState({error:""})
        if (this.state.email === '') {
            this.setState({error: "Заполните электронную почту"});
            return;
        }
        if (this.state.password === '') {
            this.setState({error: "Заполните пароль"});
            return;
        }
        this.setState({ authProccesing: true });
        try {
            let response = await fetch("http://127.0.0.1:8080/user/login", {
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
                if (json.data)
                    new Cookie().set("cookies", json.data);
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
            this.setState({error: JSON.stringify(ex)});
        }
        this.setState({ authProccesing: false });
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