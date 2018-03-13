/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";
import {Route} from 'react-router-dom';
import Post from "../Components/post";
import {connect} from 'react-redux';
import {addPost,addComment,removePost,removeComment,editPost,editComment} from '../Actions';

class Posts extends  Component{
    render(){
        return <div>Hello,Posts
        <Route path="/posts/post"  component={Post}/>
        </div>
    }
}

const mapStateToProps=(state)=>{
    return {
        posts:state.posts,
        categories:state.categories,
        comments:state.comments
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        addPost:(data) =>dispatch(addPost(data)),
        addComment:(data)=>dispatch(addComment(data)),
        removePost:(data)=>dispatch(removePost(data)),
        removeComment:(data)=>dispatch(removeComment(data)),
        editPost:(data)=>dispatch(editPost(data)),
        editComment:(data)=>dispatch(editComment(data)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);