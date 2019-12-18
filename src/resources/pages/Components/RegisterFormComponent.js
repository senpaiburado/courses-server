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
            phone: '',
            type: '',
            repeatPass: '',
            signUpProccessing: false
        }
        this.cookies = new Cookie();
    }

    onRouteToLogin() {
        this.props.onRouteToLogin();
    }

    onSignUpClicked = async () => {
        this.setState({ error: "" });

        const { email, password, birthdate, firstname, lastname, phone } = this.state;
        if (email === '') {
            this.setState({error: "Заполните электронную почту"});
            return;
        }
        if (phone === '') {
            this.setState({error: "Заполните номер телефона"});
            return;
        }
        if (password === '') {
            this.setState({error: "Заполните пароль"});
            return;
        }
        if (birthdate === null) {
            this.setState({error: "Заполните дату рождения"});
            return;
        }
        if (firstname === '') {
            this.setState({error: "Заполните имя"});
            return;
        }
        if (lastname === '') {
            this.setState({error: "Заполните фамилию"});
            return;
        }

        this.setState({ signUpProccessing: true });
        const data = this.state;
        try {
            let response = await fetch("http://10.0.1.141:8080/user/register", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    birthdate: data.birthdate
                })
            });
            console.log(response);
            if (response.ok) {
                let json = await response.json();
                console.log(JSON.stringify(json));
                if (json.data)
                    this.cookies.set('cookies', json.data);
            } else {
                console.log(response)
                if (response.status === 421)
                    this.setState({error: "Аккаунт с указаной почтой существует!"})
                else
                    this.setState({ error: response.statusText });
            }
        } catch (ex) {
            console.log(ex);
            // this.setState({ error: ex });
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

    comparePasswords = () => {
        const { password, repeatPass } = this.state;
        console.log(password, repeatPass)
        if (password === repeatPass) 
            this.setState({error: ""});
        else
            this.setState({error: "Пароли не совпадают!"})
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
                            <TextField label="Номер телефону" margin="normal" variant="outlined" type="phone" name="phone"
                                onChange={(event) => { this.setState({ phone: event.target.value }) }} required disabled={this.state.signUpProccessing} />
                        </div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}>
                            <TextField label="Пароль" margin="normal" variant="outlined" type="password" hintText="Password"
                                floatingLabelText="Password" name="password" required onChange={(event) => { this.setState({ password: event.target.value }, () => {
                                    this.comparePasswords();
                                }); }}
                                disabled={this.state.signUpProccessing} />
                        </div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}>
                            <TextField label="Підтвердження паролю" margin="normal" variant="outlined" type="password" hintText="Password"
                                floatingLabelText="Password" name="password" required onChange={(event) => { this.setState({ repeatPass: event.target.value }, () => {
                                    this.comparePasswords();
                                }); }}
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