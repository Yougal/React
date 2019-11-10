import React from 'react';
import ReactDOM from 'react-dom';
import Language from '../contexts/language'

class Button extends React.Component{
    getText=(text)=>{
        return text.language==='english'?'Submit':'Voorleggen';
    }
    render(){
        return (
            <button className="ui button primary">
                <Language.Consumer>
                    {(value)=>this.getText(value)}
                </Language.Consumer>

            </button>
        );
  }

}

export default Button;
