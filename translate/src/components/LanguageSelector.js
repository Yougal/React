import React from 'react';
import ReactDOM from 'react-dom';
import UserCreate from './UserCreate';
import Language from '../contexts/language'

class LanguageSelector extends React.Component{
  static contextType=Language;
  render(){
    return (
          <div>
            Select a Language
              <i className="flag us" onClick={()=>this.context.onlanguageChange('english')}></i>
              <i className="flag nl" onClick={()=>this.context.onlanguageChange('dutch')}></i>
          </div>
    );
  }

}

export default LanguageSelector;
