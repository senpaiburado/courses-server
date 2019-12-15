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
import FilesView from "./FilesView";

export class Files extends React.Component {
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
                <div class="box-card-profile">
                    <div>
                        <div class="h-card"> КОНТАКТИ</div>
                        <div class="list ">
                            <FilesView />
                        </div>
                    </div>
                    <div class="content">

                        <div class="lesson">
                            <p>Урок 1.pptx</p>
                        </div>
                        <div class="page">
                            <p>
                                <a class="prev" onclick="plusSlides(-1)">❮</a>
                                <din className="page-color"> 1/32 </din>
                                <a class="next" onclick="plusSlides(1)">❯</a>
                            </p>
                        </div>
                        <div class="container1">
                            <img src={require("../../images/11.jpg")}></img>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}