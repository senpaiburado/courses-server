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
import RegistryTable from "./RegistryTable.js";


export class Registry extends React.Component {
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
                        <div class="h-card"> ЖУРНАЛ</div>
                        <RegistryTable/>
                    </div>
                </div>
            </div>
        );
    }
}

