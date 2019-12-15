import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpened: false
        }
    }

    open() {

    }
    render() {
        return (
            <div className="box-spase ">
                <div className="box-card1 ">
                    <div className="h-card"> КОНТАКТИ</div>
                    <div className="box3">
                        <img className="icon" src={require("../../images/1.jpg")}></img>
                        <p className="name">VLADIMER LENIN</p>
                        <div className="exit button1">
                            <button href="#">ВИХІД</button>
                        </div>

                    </div>

                    <div className="box4">
                        <div className="box-card2">
                            <div className="h-on-card">ОСНОВНЕ</div>
                            <p>
                                <img className="personData" src={require("../../images/birthday.png")}></img>
                                <div className="personDataText"> 01.09.1991 (28 років)</div>
                            </p>
                            <p>
                                <img className="personData" src={require("../../images/MyCity.png")}></img>
                                <div className="personDataText">Чернівці</div>
                            </p>

                        </div>

                        <div className="box-card2">
                            <div className="h-on-card">КОНТАКТИ</div>
                            <p>
                                <img className="personData" src={require("../../images/email.png")}></img>
                                <div className="personDataText"> alla.ivaniuk@gmail.com</div>
                            </p>
                            <p>
                                <img className="personData" src={require("../../images/phone.png")}></img>
                                <div className="personDataText"> +380666122552</div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}