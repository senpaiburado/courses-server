import React from 'react';
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import { Button, CircularProgress } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import FilesView from "./FilesView";
import Cookies from 'universal-cookie';

export class Files extends React.Component {
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
        // console.log(props.directories)
        return (
            <div className="box-spase ">
                {this.state.isLoadedTree ? (
                <div class="box-card-profile">
                    
                    <div>
                        <div class="h-card"> МАТЕРИАЛЫ</div>
                        
                        <div class="list ">
                            <FilesView directories={this.state.fileTree} onFolderClicked={(folder) => {this.folderClicked(folder)}}/>
                        </div>
                    </div>
                    <div class="content">

                        <div class="lesson">
                            <p>{this.state.title}</p>
                        </div>
                        {!this.state.isLoadingFiles ? (
                            <div>
                        <div class="page">
                            <p>
                                <a class="prev" href="#" onClick={this.prevSlide}>❮</a>
                                    <din className="page-color"> {this.state.currentFile} / {this.state.maxFiles} </din>
                                <a class="next" href="#" onClick={this.nextSlide}>❯</a>
                            </p>
                        </div>
                        <div class="container1">
                            <img src={this.state.maxFiles > 0 ? "data:image/png;base64, " + this.state.images[this.state.currentFile - 1] : ""} alt=""></img>
                        </div></div>) : (<CircularProgress style={{height: "100px", width: "100px", marginLeft: "50%", marginTop: "25%"}}/>)}
                    </div>
                </div>) : (<CircularProgress style={{height: "100px", width: "100px", marginLeft: "40vw"}}/>)}
            </div>

        );
    }
}