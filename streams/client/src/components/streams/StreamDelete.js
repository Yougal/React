import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {deleteStream, fetchStream} from '../../actions';
import { connect } from 'react-redux';
class StreamDelete extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

     actions=
         (
            <div>
                <button className="ui primary button" onClick={()=>this.onDeleteStream()}>Approve</button>
                <button className="ui button" onClick={()=>history.push("/")}>Cancel</button>
            </div>
         )

    onDeleteStream=()=>{
        this.props.deleteStream(this.props.stream.id);
    }

    render(){
        let title = "Are you sure you want to delete this stream?"
        if(this.props.stream){
            title = `Are you sure you want to delete this with title: ${this.props.stream.title}`
        }
        return (
            <Modal 
                title="Delete Stream"
                content={title}
                actions={this.actions}
                onDismiss={()=>history.push('/')}
            ></Modal>
        );
    }
}

const mapStateToProps=(state, props)=>{
    return {stream: state.streams[props.match.params.id]};
}

export default connect(mapStateToProps,{deleteStream, fetchStream})(StreamDelete);