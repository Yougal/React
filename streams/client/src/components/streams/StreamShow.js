import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import {fetchStream} from '../../actions';
class StreamShow extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }


    render(){
        if(this.props.stream){
            const {title, description} = this.props.stream;
            return (
                <div>
                    <h1>{title}</h1>
                    <h5>{description}</h5>
                </div>
            );
        }else{
            return <div>Loading....</div>;
        }
    }

}


const mapStateToProps=(state, props)=>{
    return {stream: state.streams[props.match.params.id]};
}

export default connect(mapStateToProps,{fetchStream})(StreamShow);