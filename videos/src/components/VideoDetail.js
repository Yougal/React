import React from 'react';
export default class VideoDetail extends React.Component{

    
    render(){
        if(!this.props.video){
            
            return (
                <div>Loading.....</div>
                );
            }else{
            const videoStr=`https://www.youtube.com/embed/${this.props.video.id.videoId}`;
            return (
                <div>
                    <div className="ui embed">
                        <iframe title="Video player" src={videoStr}></iframe>
                    </div>
                    <div className="ui segment">
                        <h4 className="ui header">{this.props.video.snippet.title}</h4>
                        <p>{this.props.video.snippet.description}</p>
                    </div>
              
                </div>
            );
        }
    }

}