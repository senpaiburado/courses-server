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
import TableView from "./TableView";


export class Timetable extends React.Component {
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
                <div className="box-card1 scroll">
                    <div>
                        <div class="h-card"> РАСПИСАНИЕ</div>
                        <div class="page-Timetable">
                            <p>
                                <a class="prev" onclick="plusSlides(-1)">❮</a>
                                <din className="arrau"> НОЯБРЬ 28 - ДЕКАБРЬ 05  </din>
                                <a class="next" onclick="plusSlides(1)">❯</a>
                            </p>
                        </div>
                        <TableView/>
                    </div>
                </div>
            </div>
        );
    }
}

