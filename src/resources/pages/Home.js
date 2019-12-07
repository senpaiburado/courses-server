import React from "react";
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = {

        }
    }

    render() {
        return <div>
            <Link to="/auth">Login</Link>
            <br/>
            <Link to="/teacher/info">Cabinet</Link>
        </div>
    }
}