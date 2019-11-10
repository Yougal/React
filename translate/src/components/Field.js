import React from 'react';
import ReactDOM from 'react-dom';
import Language from '../contexts/language'

class Field extends React.Component{

    getText=(text)=>{
        return text.language==='english'?'Name':'Naam';
    }
    
    render(){
        return (
            <div className="ui field">
            <label>
                <Language.Consumer>
                    {(value)=>this.getText(value)}
                </Language.Consumer>
            </label>
            <input></input>
            </div>
        );
  }

}

export default Field;
