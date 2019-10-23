import React from 'react';
import ReactDOM from 'react-dom';
import './VideoItem.css'
export default class VideoItem extends React.Component{

    onClickImg=()=>{
        this.props.onVideoSelect(this.props.video);
    }

    render(){
        return (
            <div className="item video-item" onClick={this.onClickImg}>
             <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.title}></img>
             <div className="content">
                <div className="header">{this.props.video.snippet.title}</div>
             </div>
            </div>
        );
    }

}