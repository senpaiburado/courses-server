import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import { Button,CircularProgress} from '@material-ui/core';
import FilesView from "./FilesView";
import Cookies from 'universal-cookie';
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
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpened: false,
            fileTree: [],
            isLoadedTree: false,
            isLoadingFiles: false,
            title: '',
            currentFile: 1,
            maxFiles: 0,
            images: []
        }
    }

    async componentDidMount() {
        let response = await fetch('http://localhost:8080/user/files?cookie='+new Cookies().get("cookies").cookieKey);
        if (response.ok) {
            let json = await response.json();
            console.log(response);
            console.log(json);
            if (json.data && json.data.data && json.data.data.children) {
                this.setState({fileTree: json.data.data.children})
                console.log("state");
            }
            this.setState({isLoadedTree: true})
        }
    }

    folderClicked = async (folder) => {
        this.setState({title: folder.name})
        this.setState({isLoadingFiles: true})

        let response = await fetch("http://localhost:8080/user/images?cookie="+new Cookies().get("cookies").cookieKey+"&path="+folder.path);
        if (response.ok) {
            let json = await response.json();
            console.log(response);
            console.log(json.data.images);
            if (json.data) {
                this.setState({images: json.data.images, maxFiles: json.data.images.length, currentFile: 1});
                console.log(this.state.images)
                console.log("state");
            }
            this.setState({isLoadingFiles: false})
        }
    }

    nextSlide = (event) => {
        if (this.state.currentFile < this.state.maxFiles)
            this.setState({currentFile: this.state.currentFile+1});
    }

    prevSlide = (event) => {
        if (this.state.currentFile -1 > 0)
            this.setState({currentFile: this.state.currentFile-1});
    }
    
    
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
                    <div class="video_menu">
                        <div className="boxVideo">

                            <div className={`containerM ${this.state.isMenuOpened ? "change" : ''}`} onClick={() => { this.setState({ isMenuOpened: !this.state.isMenuOpened }) }}
                                style={{ width: "auto" }}>
                                <div className="bar1 bar1V"></div>
                                <div className="bar2 bar2V"></div>
                                <div className="bar3 bar3V"></div>
                            </div>
                            
                    {this.state.isMenuOpened ? (<div id="mySidenavV" className="">
                        <div className="tabcontentV ">
                        <div className={`containerM ${this.state.isMenuOpened ? "change" : ''}`} onClick={() => { this.setState({ isMenuOpened: !this.state.isMenuOpened }) }}
                                style={{ width: "auto" }}>
                                <div className="bar1 bar1V closeMenu"></div>
                                <div className="bar2 bar2V closeMenu"></div>
                                <div className="bar3 bar3V closeMenu"></div>
                            </div>
                            
                            <div class="list ">
                            <FilesView directories={this.state.fileTree} onFolderClicked={(folder) => {this.folderClicked(folder)}}/>
                        </div>
                        
                        
                        </div>
                        
                    </div>) : ''}
                        </div>
                    </div>
                    <div className="Videoicon">
                        <a href="#"><img src={require("../../images/camera-Video.png")} style={{ width: "25%", height: "100%" }}></img></a>
                        <a href="#"><img src={require("../../images/voice.png")} style={{ width: "25%", height: "100%", marginLeft: "3%" }}></img></a>
                        <a href="#"><img src={require("../../images/exit-video.png")} style={{ width: "25%", height: "100%", marginLeft: "22%" }}></img></a>
                    </div>
                    <div className="textItem">
                        <p>Урок с учителем Василиєм</p>
                    </div>
                    <a class="next1" href="javascript:void(0)" onClick={() => this.nextWeek()}>❯</a>
                    <div className="scrollItem">
                        <p>7 / 102</p>
                    </div>
                    <a class="prev1" href="javascript:void(0)" onClick={() => this.prevWeek()}>❮</a>

                    <div className="scrollItem2">
                   
                            <img src={this.state.maxFiles > 0 ? "data:image/png;base64, " + this.state.images[this.state.currentFile - 1] : ""} alt=""></img>
                        
                    
                    </div>
                    </div>   </div>
             
        )
    }

}