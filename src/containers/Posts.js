/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";
import {connect} from 'react-redux';
import *as CommentAPI from '../utils/CommentsAPI';
import *as PostsAPI from '../utils/PostsAPI';
import {Route} from 'react-router-dom';
import Post from '../Components/Post';
import NavI from '../Components/NavI';
import NotFound from '../Components/NotFound';

import *as actions from '../Actions';

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
        const {postId}=this.props.match.params;
        return (
          <div>
                { this.props.posts[postId]&&!this.props.posts[postId].deleted?
                    <div>
                        <NavI/>
                        <Route render={()=>(<Post postId={this.state.postId} state={this.props}/>)}/>
                    </div>:<NotFound/>
                }
          </div>

        )

    }
}

const mapStateToProps=(state)=>{
    return {
        posts:state.posts,
        comments:state.comments,
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        addPosts:(data) =>dispatch(actions.addPost(data)),
        addComments:(data)=>dispatch(actions.addComment(data)),
        removePosts:(data)=>dispatch(actions.removePost(data)),
        removeComments:(data)=>dispatch(actions.removeComment(data)),
        getCategories:(data)=>dispatch(actions.getCategory(data)),
        increasePostsVote:(data)=>dispatch(actions.increasePostVote(data)),
        decreasePostsVote:(data)=>dispatch(actions.decreasePostVote(data)),
        increaseCommentsVote:(data)=>dispatch(actions.increaseCommentVote(data)),
        decreaseCommentsVote:(data)=>dispatch(actions.decreaseCommentVote(data))

    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);