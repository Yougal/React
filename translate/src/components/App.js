import React from 'react';
import ReactDOM from 'react-dom';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/language'
import LanguageSelector from './LanguageSelector';

class App extends React.Component{

  render(){
    return (
        <div className="ui container">
          <LanguageStore>
              <LanguageSelector></LanguageSelector>
              <UserCreate></UserCreate>
         </LanguageStore>
        </div>
    );
  }

}

export default App;
