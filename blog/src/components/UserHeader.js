import React from 'react';
import {fetchUserHeaderAction} from '../actions';
import {connect} from 'react-redux';

class UserHeader extends React.Component{
    componentDidMount(){
        this.props.fetchUserHeaderAction(this.props.userId);
    }
    render(){
         const  user = this.props.user;
        return (
            <div className="header">{user.name}</div>
        );
    }


}

const mapStateToProps=(state)=>{
    console.log(state.user);
    return {user:state.user}
}

export default connect(mapStateToProps,{fetchUserHeaderAction})(UserHeader);