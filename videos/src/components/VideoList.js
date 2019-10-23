import React from 'react';
import ReactDOM from 'react-dom';
import VideoItem from './VideoItem';

export default class VideoList extends React.Component{

    render(){
       let videos= this.props.videos;
       let videoItems = videos.map((video)=>{
           return <VideoItem key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect}/>
       })
        return (
            <div className="ui relaxed divided list">
                {videoItems}
            </div>
        );
    }

}