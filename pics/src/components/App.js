import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import Axios from '../api/unsplash';
import ImageList from './ImageList'

class App extends React.Component{
    state={images:[]};

    onSubmission=async (term)=>{
        const result = await Axios.get('search/photos',{
            params:{
                query: term
            },
        });
        this.setState({images:result.data['results']})
    }
    render(){
        return (
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit={this.onSubmission}></SearchBar>
            <ImageList images={this.state.images}></ImageList>
        </div>
        );
    }


}


export default App;