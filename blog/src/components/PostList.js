import React from 'react';
import {fetchPostAction} from '../actions';
import {connect} from 'react-redux';
import UserHeader from './UserHeader';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPostAction();
    }
    render(){
         const  post = this.props.posts.map(post=>{
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div> 
                    <UserHeader userId={post.userId}></UserHeader>          
                </div>
            )}
        );
        return (
            <div className="ui relaxed divided list">{post}</div>
        );
    }


}

const mapStateToProps=(state)=>{
    //console.log(state);
    return {posts:state.posts}
}

export default connect(mapStateToProps,{fetchPostAction})(PostList);