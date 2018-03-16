/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";
import {Button,Badge,Collapse} from 'react-bootstrap';

class Post extends  Component{
    state={
        open:false,
        disable:false
    };

    render(){

        const {increasePostsVote,decreasePostsVote,increaseCommentsVote,
                decreaseCommentsVote,removePosts}=this.props.state;
        const posts=[];
        const item=Object.keys(this.props.state.posts);
        for (let j=0;j<item.length;j++){
            posts.push(this.props.state.posts[item[j]])
        }

        const comments=[];
        const list=Object.keys(this.props.state.comments);
        for (let j=0;j<list.length;j++){
            comments.push(this.props.state.comments[list[j]])
        }

        const {postId}=this.props.state.match.params;
        const post=posts.filter(post=>post.id===postId);
        return (
            <div>
                <h2>{post[0].title}</h2>
                <h3>{post[0].author} </h3>
                <p>{post[0].body}</p>
                <h4><Button onClick={()=>{ this.setState({disable:true});increasePostsVote(post[0])} } disabled={this.state.disable}><i className="fa fa-thumbs-o-up fa-lg"/> {post[0].voteScore}</Button>&nbsp;
                    <Button onClick={()=>{this.setState({disable:true});decreasePostsVote(post[0])}} disabled={this.state.disable}><i className="fa fa-thumbs-o-down fa-lg"/> </Button>
                    <Button onClick={()=>this.setState({open:!this.state.open})}>comment&nbsp;<Badge>{post[0].commentCount}</Badge></Button>

                    &nbsp;<Button onClick={()=>removePosts(post)}>delete</Button>
                </h4>
                <Collapse in={this.state.open}>
                    <div>
                        {comments.map((comment)=>(
                            <div key={comment.id}>
                                <p>{comment.body}</p>
                                <p>{comment.author}</p>
                                <p> <Button onClick={()=>{increaseCommentsVote(comment)}}><i className="fa fa-thumbs-o-up fa-lg"/> {comment.voteScore}</Button>&nbsp;
                                    <Button onClick={()=>decreaseCommentsVote(comment)}><i className="fa fa-thumbs-o-down fa-lg"/> </Button>
                                    <Button >delete</Button>
                                </p>
                            </div>
                        ))}
                    </div>
                </Collapse>
            </div>)
    }
}
export default Post;
