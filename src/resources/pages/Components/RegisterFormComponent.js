import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';

export class RegisterFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            email: '',
            password: ''
        }
    }

    onRouteToLogin() {
        this.props.onRouteToLogin();
    }

    render() {
        return (
            <Card id="loginForm">
                <div className="authHeader">
                    <span>РЕЄСТРАЦІЯ</span>
                </div>
                <div className="loginGroup" style={{ width: "100%" }}>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}>
                            <TextField label="Ім'я" margin="normal" variant="outlined" type="text" name="fistname"
                                onChange={(event) => { this.setState({ email: event.target.value }) }} required />
                        </div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}>
                            <TextField label="Прізвище" margin="normal" variant="outlined" type="text" name="lastname"
                                onChange={(event) => { this.setState({ email: event.target.value }) }} required />
                        </div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}>
                            <TextField label="Дата народження" margin="normal" variant="outlined" type="date" name="birthdate"
                                onChange={(event) => { this.setState({ email: event.target.value }) }} required InputLabelProps={{ shrink: true, required: true }}/>
                        </div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}>
                            <TextField label="Електронна пошта" margin="normal" variant="outlined" type="email" name="email"
                                onChange={(event) => { this.setState({ email: event.target.value }) }} required />
                        </div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}><TextField label="Пароль" margin="normal" variant="outlined" type="password" hintText="Password"
                            floatingLabelText="Password" name="password" required onChange={(event) => { this.setState({ password: event.target.value }) }} /></div>
                    </div>
                    <div className="formGroup">
                        <div style={{ margin: "auto" }}><TextField label="Підтвердження паролю" margin="normal" variant="outlined" type="password" hintText="Password"
                            floatingLabelText="Password" name="password" required onChange={(event) => { this.setState({ password: event.target.value }) }} /></div>
                    </div>
                    <div className="formGroup">
                        <Button variant="contained" >Зареєструватися</Button>
                    </div>
                    <div className="formGroup">
                        <p>
                            <Button className="login-button-another-action" onClick={() => { }}>Забули пароль?</Button>
                            <Button className="login-button-another-action" onClick={() => { this.onRouteToLogin() }}>Ввійти</Button>
                        </p>
                    </div>
                </div>
            </Card>
        );
    }
}