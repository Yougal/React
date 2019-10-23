import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {selectSongAction} from '../actions'
class SongsDetail extends React.Component{

    render(){
        if(!this.props.selectedSong){
            return (
                <div>Select a Song</div>
            )
        }
        return (  
            <div>
                {this.props.selectedSong.title} -- {this.props.selectedSong.duration}
            </div>
        );

    }

}

const mapStateToProps=(state)=>{
    return {selectedSong:state.selectedSong};
}

export default connect(mapStateToProps)(SongsDetail);