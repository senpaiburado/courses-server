/* eslint-disable no-restricted-globals */
import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import { Button, CircularProgress, DialogContentText } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cookies from 'universal-cookie';

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            fullname: '',
            birthdate: null,
            email: '',
            phone: '',
            id: -1
        }
    }

    async componentDidMount() {
        try {
            let cookies = new Cookies().get("cookies");
            if (!cookies || !cookies.cookieKey) {
                location.href = "/";
            }
            let response = await fetch("http://localhost:8080/user/info?cookie=" + String(cookies.cookieKey), {
                method: 'GET',
            });
            if (response.ok) {
               let json = await response.json();
               console.log(json);
               if (json.data) {
                   this.setState({fullname: json.data.fullname});
                   this.setState({birthdate: json.data.birthdate});
                   this.setState({email: json.data.email});
                   this.setState({phone: json.data.phone});
                   this.setState({id: json.data.id});
                   this.setState({isLoaded: true});
                   console.log(this.state)
               } else {
                   if (response.status === 403) {
                       new Cookies().remove("cookies");
                       location.href = "/";
                   }
               }
            }
        } catch (ex) {
            console.log(ex);
        }
    }

    render() {
        return (
            <div className="box-spase ">
                {this.state.isLoaded ? (
                <div className="box-card1 ">
                    <div className="h-card">ПРОФИЛЬ</div>
                    <div className="box3">
                        <img className="icon" src={require("../../images/1.jpg")} alt=""></img>
                        <p className="name">{this.state.fullname}</p>
                        <div className="exit button1">
                            <button href="#">ВЫХОД</button>
                        </div>

                    </div>

                    <div className="box4">
                        <div className="box-card2">
                            <div className="h-on-card">ОСНОВНОЕ</div>
                            <p>
                                <img className="personData" src={require("../../images/birthday.png")} alt=""></img>
                                <div className="personDataText">{this.state.birthdate}</div>
                            </p>
                            <p>
                                <img className="personData" src={require("../../images/MyCity.png")} alt=""></img>
                                <div className="personDataText">{this.state.id}</div>
                            </p>

                        </div>

                        <div className="box-card2">
                            <div className="h-on-card">КОНТАКТЫ</div>
                            <p>
                                <img className="personData" src={require("../../images/email.png")} alt=""></img>
                                <div className="personDataText">{this.state.email}</div>
                            </p>
                            <p>
                                <img className="personData" src={require("../../images/phone.png")} alt=""></img>
                                <div className="personDataText">{this.state.phone}</div>
                            </p>
                        </div>
                    </div>
                </div>) : 
                
                (<CircularProgress style={{height: "100px", width: "100px", marginLeft: "40vw"}}/>)}

            </div>
        );
    }
}