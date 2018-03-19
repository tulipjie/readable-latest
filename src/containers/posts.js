/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";
import {connect} from 'react-redux';
import *as CommentAPI from '../utils/CommentsAPI';
import *as PostsAPI from '../utils/PostsAPI';
import {Route} from 'react-router-dom';
import Post from '../Components/post';
import NavI from '../Components/nav';

import {addPost,addComment,removePost,removeComment,editPost,editComment,
    getCategory,increasePostVote,decreasePostVote,increaseCommentVote,decreaseCommentVote} from '../Actions';

class Posts extends  Component{
    state={
        open:false,
        postId:this.props.match.params.postId
    };

    componentDidMount(){
        const {postId}=this.props.match.params;
        const {addComments,addPosts}=this.props;

        PostsAPI.get(postId).then((post)=>{
            return addPosts(post)
            });
        CommentAPI.getByParent(postId).then((comments)=>{
            comments.sort((a,b)=>{
                return b.voteScore-a.voteScore
            }).map((comment)=>{
                return addComments(comment)
            });
        });
    }
    render(){

        return (
            <div>
                <NavI/>
                <Route render={()=>(<Post postId={this.state.postId} state={this.props}/>)}/>
            </div>

        )

    }
}

const mapStateToProps=(state)=>{
    return {
        posts:state.posts,
        categories:state.categories,
        comments:state.comments,
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        addPosts:(data) =>dispatch(addPost(data)),
        addComments:(data)=>dispatch(addComment(data)),
        removePosts:(data)=>dispatch(removePost(data)),
        removeComments:(data)=>dispatch(removeComment(data)),
        editPosts:(data)=>dispatch(editPost(data)),
        editComments:(data)=>dispatch(editComment(data)),
        getCategories:(data)=>dispatch(getCategory(data)),
        increasePostsVote:(data)=>dispatch(increasePostVote(data)),
        decreasePostsVote:(data)=>dispatch(decreasePostVote(data)),
        increaseCommentsVote:(data)=>dispatch(increaseCommentVote(data)),
        decreaseCommentsVote:(data)=>dispatch(decreaseCommentVote(data))

    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);