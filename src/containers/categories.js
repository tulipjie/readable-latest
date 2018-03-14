/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";
import {connect} from 'react-redux';
import NavI from '../Components/nav';
import {addPost,addComment,removePost,removeComment,editPost,editComment} from '../Actions';

class Categories extends  Component{
    render(){
        return (
            <div>
                <NavI/>
            </div>
        )
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
)(Categories);
