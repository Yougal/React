import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{
    state={term:''};

    onSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(e)=>this.onSubmit(e)}>
                    <div className="field">
                        <label>Image Search: </label><input type="text" value={this.state.term} 
                        onChange={(e)=>this.setState({term:e.target.value})}></input>
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;