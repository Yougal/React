import React from 'react'

const Language = React.createContext('english');

export class LanguageStore extends React.Component{


    state = {language:'english'};

    render(){

        return (
                <Language.Provider value={{...this.state, onlanguageChange: this.onlanguageChange}}>
                    {this.props.children}
                </Language.Provider>
        );
    }

    onlanguageChange=(language)=>{
        this.setState({language});
    }

}

export default Language;