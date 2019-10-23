import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {createStream} from '../../actions/index'
import { connect } from 'react-redux';
import StreamForm from  '../streams/StreamForm';

class StreamCreate extends React.Component{

    onSubmit=(formData)=>{
       this.props.createStream(formData);
    }

    render(){
      
        return (
            <div>
                <h2>Create a Stream</h2>
              <StreamForm onSubmit={this.onSubmit}></StreamForm>
            </div>
        );
    }
}
export default connect(null,{createStream})(StreamCreate);