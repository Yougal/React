import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './seasonDisplay' 
import Spinner from './spinner';
class App extends React.Component{
    state={lat:null, long:0, errMsg:''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            pos=> this.setState({lat: pos.coords.latitude}),
            err=>this.setState({lat:null, long:null, errMsg:err.message}));
    }

    render(){
       
            if(this.state.errMsg && !this.state.lat){
               return  (
                <div> 
                    Error:  {this.state.errMsg}
                </div>
                );
            }
            if(!this.state.errMsg && this.state.lat){
                return  (
                 <div> 
                      <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
                 </div>
                 );
             }else{
                return  (
                   <Spinner></Spinner>
                    );
             }
    }
}

ReactDOM.render( <App/>,document.querySelector("#root"));