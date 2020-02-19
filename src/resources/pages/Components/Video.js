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



export class Video extends React.Component {
    render() {
        return (

            <div className="Video ">
                <div className="  VideoIcon">
                    <div className="item_video1">
                        <img src={require("../../images/children.png")} style={{ width: "100%", height: "100%" }}></img>
                    </div>
                    <div className="item_video2">
                        <img src={require("../../images/teacherweb.png")} style={{ width: "100%", height: "100%" }}></img>
                    </div>

                    <div className="textItem">
                        <p>Урок с учителем Василиєм</p>
                    </div>
                    <div className="scrollItem">
                        <p>7 / 102</p>
                    </div>
                    <div className="tools">
                        <a href="#"> <img className="paint_icon" src={require("../../images/pen_icon.png")} style={{ width: "80%", height: "15%" }}></img></a>
                        <a href="#"> <img className="paint_icon" src={require("../../images/Aa.png")} style={{ width: "80%", height: "15%" }}></img></a>
                        <a href="#"> <img className="paint_icon" src={require("../../images/Line.png")} style={{ width: "80%", height: "15%" }}></img></a>
                        <a href="#"> <img className="paint_icon" src={require("../../images/Arrow.png")} style={{ width: "80%", height: "15%" }}></img></a>
                        <a href="#"> <img className="paint_icon" src={require("../../images/Ellipse.png")} style={{ width: "80%", height: "15%" }}></img></a>
                        <a href="#"> <img className="paint_icon" src={require("../../images/Rectangle.png")} style={{ width: "80%", height: "15%" }}></img></a>
                    </div>
                    <div className="scrollItem2">
                        <img src={require("../../images/material.png")} style={{ width: "100%", height: "100%" }}></img>
                    </div>
                </div>
            </div>

        )
    }

}



export class VideoR extends React.Component {
    render() {
        return (

            <div className="Video ">
                <div className="  VideoIcon">
                    <div className="item_video1">
                        <img src={require("../../images/children.png")} style={{ width: "100%", height: "100%" }}></img>
                    </div>
                    <div className="item_video2">
                        <img src={require("../../images/teacherweb.png")} style={{ width: "100%", height: "100%" }}></img>
                    </div>
                    <div className="Videoicon">
                    <a href="#"><img src={require("../../images/camera-Video.png")} style={{ width: "25%", height: "100%" }}></img></a>
                    <a href="#"><img src={require("../../images/voice.png")} style={{ width: "25%", height: "100%",marginLeft:"3%" }}></img></a>
                    <a href="#"><img src={require("../../images/exit-video.png")} style={{ width: "25%", height: "100%",marginLeft:"22%" }}></img></a>
                    </div>
                    <div className="textItem">
                        <p>Урок с учителем Василиєм</p>
                    </div>
                    <a class="next1" href="javascript:void(0)" onClick={() => this.nextWeek()}>❯</a>
                    <div className="scrollItem">
                        <p>7 / 102</p>
                    </div>
                    <a class="prev1" href="javascript:void(0)" onClick={() => this.prevWeek()}>❮</a>
                    <div className="tools">
                        <a href="#"> <img className="paint_icon" src={require("../../images/pen_icon.png")} style={{ width: "80%", height: "15%" }}></img></a>
                        <a href="#"> <img className="paint_icon" src={require("../../images/Aa.png")} style={{ width: "80%", height: "15%" }}></img></a>
                        <a href="#"> <img className="paint_icon" src={require("../../images/Line.png")} style={{ width: "80%", height: "15%" }}></img></a>
                        <a href="#"> <img className="paint_icon" src={require("../../images/Arrow.png")} style={{ width: "80%", height: "15%" }}></img></a>
                        <a href="#"> <img className="paint_icon" src={require("../../images/Ellipse.png")} style={{ width: "80%", height: "15%" }}></img></a>
                        <a href="#"> <img className="paint_icon" src={require("../../images/Rectangle.png")} style={{ width: "80%", height: "15%" }}></img></a>
                    </div>
                    <div className="scrollItem2">
                        <img src={require("../../images/material.png")} style={{ width: "100%", height: "100%" }}></img>
                    </div>
                    
                </div>
            </div>

        )
    }

}