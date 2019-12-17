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
            isMenuOpened: false,
            startMonth: '',
            startDay: 0,
            endMonth: '',
            endDay: 0
        }
        this.currDate = new Date();
    }

    componentWillMount() {
        this.setState({startMonth: this.monthNames[this.getMonday(this.currDate).getMonth()], endMonth: this.monthNames[this.endDate().getMonth()],
                       startDay: this.getMonday(this.currDate).getDate(), endDay: this.endDate().getDate()})
    }

    monthNames = ["ЯНВАРЬ", "ФЕВРАЛЬ", "МАРТ", "АПРЕЛЬ", "МАЙ", "ИЮНЬ", "ИЮЛЬ", "АВГУСТ", "СЕНТЯБРЬ", "ОКТЯБРЬ", "НОЯБРЬ", "ДЕКАБРЬ"];

    nextWeek = () => {
        this.currDate.setDate(this.currDate.getDate() + 7);
        this.setState({startMonth: this.monthNames[this.getMonday(this.currDate).getMonth()], endMonth: this.monthNames[this.endDate().getMonth()],
            startDay: this.getMonday(this.currDate).getDate(), endDay: this.endDate().getDate()})
    }

    prevWeek = () => {
        this.currDate.setDate(this.currDate.getDate() - 7);
        this.setState({startMonth: this.monthNames[this.getMonday(this.currDate).getMonth()], endMonth: this.monthNames[this.endDate().getMonth()],
            startDay: this.getMonday(this.currDate).getDate(), endDay: this.endDate().getDate()})
    }

    getMonday( date = new Date() ) {
        var day = date.getDay() || 7;  
        if( day !== 1 ) 
            date.setHours(-24 * (day - 1)); 
        return date;
    }

    endDate() {
        
        let start = this.getMonday(this.currDate);
        start.setDate(start.getDate() + 6);
        return start;
    }
    render() {
        return (
            <div className="box-spase ">
                <div className="box-card1 scroll">
                    <div>
                        <div class="h-card"> РАСПИСАНИЕ</div>
                        <div class="page-Timetable">
                            <p>
                                <a class="prev" href="javascript:void(0)" onClick={() => this.prevWeek()}>❮</a>
                                <din className="arrau"> {this.state.startMonth} {this.state.startDay} - {this.state.endMonth} {this.state.endDay}  </din>
                                <a class="next" href="javascript:void(0)" onClick={() => this.nextWeek()}>❯</a>
                            </p>
                        </div>
                        <TableView/>
                    </div>
                </div>
            </div>
        );
    }
}

