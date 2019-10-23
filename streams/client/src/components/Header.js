import React from 'react';
import ReactDom from 'react-dom';
import {Link, BrowserRouter} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

export class Header extends React.Component{
    render(){
        return (
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">Streamer</Link>
                    <div className="right menu">
                        <Link to="/" className="item">All Streams</Link>
                        <GoogleAuth></GoogleAuth>
                    </div>
                </div>
        );
    }

}