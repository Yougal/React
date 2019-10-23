import React from 'react';
import ReactDom from 'react-dom';
import history from '../../history';
export default class StreamDelete extends React.Component{
    render(){
        return ReactDom.createPortal (
            <div onClick={()=>history.push('/')} className="ui dimmer modals visible active">
                <div className="ui standard modal visible active">
                    <div className="header">Delete Stream</div>
                    <div className="content">
                        Are you sure you want to delete this stream?
                    </div>
                    <div className="actions">
                        <div className="ui primary button">Approve</div>
                        <div className="ui button">Cancel</div>
                    </div>
                </div>
            </div>,
          document.querySelector("#modal")
        );
    }
}