import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class App extends React.Component{

    state ={videos:[], selectedVideo:null};

    onSearch = async (searchString)=>{
       console.log(searchString);
       const response = await youtube.get("search", {
            params:{
                q: searchString
            }
        });
        this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
    }

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video});
    }

    componentDidMount(){
        this.onSearch('buildings');
    }


    render(){
        return (
        <div className="ui container">
            <SearchBar onSearch={this.onSearch}></SearchBar>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}></VideoDetail>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}></VideoList>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}

