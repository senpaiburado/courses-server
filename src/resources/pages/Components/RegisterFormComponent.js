import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import { Button, FormLabel } from '@material-ui/core';
import SelectTypeSignUpComponent from "./SelectTypeSignUpComponent";
import Cookie from "universal-cookie";

export class RegisterFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            birthdate: null,
            type: '',
            signUpProccessing: false
        }
        this.cookies = new Cookie();
    }

    onRouteToLogin() {
        this.props.onRouteToLogin();
    }

    onSignUpClicked = async () => {
        this.setState({ signUpProccessing: true });
        this.setState({ error: "" });
        const data = this.state;
        try {
            let response = await fetch("http://localhost:8080/user/register", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    birthdate: data.birthdate
                })
            });
            console.log(response);
            if (response.ok) {
                let json = await response.json();
                if (json.cookieKey)
                    this.cookies.set('cookie-key', json.cookieKey);
            } else {
                console.log(response)
                if (response.status === 421)
                    this.setState({error: "Аккаунт с указаной почтой существует!"})
                else
                    this.setState({ error: response.statusText });
            }
        } catch (ex) {
            console.log(ex);
            this.setState({ error: ex });
        }
        this.setState({ signUpProccessing: false });
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
                    <span>РЕГИСТРАЦИЯ</span>
                </div>
                <div className="loginGroup" style={{ width: "100%" }}>
                    {this.state.error ? <this.ErrorBlock/> : ""}
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}>
                            <TextField label="Ім'я" margin="normal" variant="outlined" type="text" name="fistname"
                                onChange={(event) => { this.setState({ firstname: event.target.value }) }} required disabled={this.state.signUpProccessing} />
                        </div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}>
                            <TextField label="Прізвище" margin="normal" variant="outlined" type="text" name="lastname"
                                onChange={(event) => { this.setState({ lastname: event.target.value }) }} required disabled={this.state.signUpProccessing} />
                        </div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}>
                            <TextField label="Дата народження" margin="normal" variant="outlined" type="date" name="birthdate"
                                onChange={(event) => { this.setState({ birthdate: event.target.value }) }} required InputLabelProps={{ shrink: true, required: true }}
                                disabled={this.state.signUpProccessing} />
                        </div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}>
                            <TextField label="Електронна пошта" margin="normal" variant="outlined" type="email" name="email"
                                onChange={(event) => { this.setState({ email: event.target.value }) }} required disabled={this.state.signUpProccessing} />
                        </div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}>
                            <TextField label="Пароль" margin="normal" variant="outlined" type="password" hintText="Password"
                                floatingLabelText="Password" name="password" required onChange={(event) => { this.setState({ password: event.target.value }) }}
                                disabled={this.state.signUpProccessing} />
                        </div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}>
                            <TextField label="Підтвердження паролю" margin="normal" variant="outlined" type="password" hintText="Password"
                                floatingLabelText="Password" name="password" required onChange={(event) => { }}
                                disabled={this.state.signUpProccessing} />
                        </div>
                    </div>
                    <div className="formGroup">
                        <SelectTypeSignUpComponent style={{ fontSize: "18pt" }} disabled={this.state.signUpProccessing}
                            valueChanged={(val) => { this.setState({ type: val }) }} />
                    </div>
                    <br />
                    <div className="formGroup">
                        <Button variant="contained" onClick={this.onSignUpClicked} disabled={this.state.signUpProccessing}>Зарегистрироваться</Button>
                    </div>
                    <div className="formGroup">
                        <p>
                            <Button className="login-button-another-action" onClick={() => { this.onRouteToLogin() }}>Ввійти</Button>
                        </p>
                    </div>
                </div>
            </Card>
        );
    }
}