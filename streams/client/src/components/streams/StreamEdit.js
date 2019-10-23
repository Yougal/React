import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import {fetchStream, editStream} from '../../actions';
import StreamForm from  '../streams/StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component{
    
    componentDidMount(){
       this.props.fetchStream(this.props.match.params.id); 
    }

    onSubmit=(formValues)=>{
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render(){
        if(!this.props.stream){
            return (
                <div>Loading...</div>
            );
        }else{
            return (
                <div>
                    <h3>Edit a stream</h3>
                   <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream,'title','description')}></StreamForm>
                </div>
            );
        }
    }
}
const mapStateToProps=(state, props)=>{
    return {stream: state.streams[props.match.params.id]};
}

export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit);