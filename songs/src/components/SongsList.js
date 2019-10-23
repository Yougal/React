import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {selectSongAction} from '../actions'
class SongsList extends React.Component{

    render(){
        let items=  this.props.songs.map((song)=>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={()=>this.props.selectSongAction(song)}>Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>

            );
        });
        return (  
            <div className="ui divided list">
                {items}
            </div>
        );

    }

}

const mapStateToProps=(state)=>{
    console.log(state);
    return {songs:state.songs};
}

export default connect(mapStateToProps,{selectSongAction})(SongsList);