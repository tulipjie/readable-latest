/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";
import {connect} from 'react-redux';
import *as CommentAPI from '../utils/CommentsAPI';
import {Button,Badge} from 'react-bootstrap';

import {addPost,addComment,removePost,removeComment,editPost,editComment,getCategory} from '../Actions';

class Posts extends  Component{
    state={
        open:false
    };
    componentDidMount(){
        const {postId}=this.props.match.params;
        const {addComments}=this.props;
        CommentAPI.getByParent(postId).then((comments)=>{
            comments.map((comment)=>{
                return addComments(comment)
            });
        });
    }
    render(){
        const posts=[];
        const item=Object.keys(this.props.posts);
        for (let j=0;j<item.length;j++){
            posts.push(this.props.posts[item[j]])
        }

        const comments=[];
        const list=Object.keys(this.props.comments);
        for (let j=0;j<list.length;j++){
            comments.push(this.props.comments[list[j]])
        }

        const {postId}=this.props.match.params;
        const post=posts.filter(post=>post.id===postId);
        return (
            <div>
                <h2>{post[0].title}</h2>
                <h3>{post[0].author} </h3>

                <p>{post[0].body}</p>
                <h4><Button><i className="fa fa-thumbs-o-up fa-lg"/> {post[0].voteScore}</Button>&nbsp;

                    <span><Button>comment&nbsp;<Badge>{post[0].commentCount}</Badge></Button> </span>

                    &nbsp;<span><Button>delete</Button></span></h4>
            </div>)
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
        addPosts:(data) =>dispatch(addPost(data)),
        addComments:(data)=>dispatch(addComment(data)),
        removePosts:(data)=>dispatch(removePost(data)),
        removeComments:(data)=>dispatch(removeComment(data)),
        editPosts:(data)=>dispatch(editPost(data)),
        editComments:(data)=>dispatch(editComment(data)),
        getCategories:(data)=>dispatch(getCategory(data))
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);