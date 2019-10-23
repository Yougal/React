import React from 'react';
import ReactDom from 'react-dom';
import SongsList from './SongsList';
import SongDetail from './SongDetail';

export default class App extends React.Component{
    render(){
        return (
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <SongsList/>
                    </div>
                    <div className="column eight wide">
                        <SongDetail/>
                    </div>
                </div>
            </div>
        );
    }
}