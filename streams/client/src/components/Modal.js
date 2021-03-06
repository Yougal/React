import React from 'react';
import ReactDom from 'react-dom';
export default class Model extends React.Component{
    render(){
        return ReactDom.createPortal (
            <div onClick={this.props.onDismiss} className="ui dimmer modals visible active">
                <div onClick={(e)=>e.stopPropagation()} className="ui standard modal visible active">
                    <div className="header">{this.props.title}</div>
                    <div className="content">{this.props.content}</div>
                    <div className="actions">
                       {this.props.actions}
                    </div>
                </div>
            </div>,
          document.querySelector("#modal")
        );
    }
}