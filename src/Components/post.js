/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";
import {Button,Badge,Collapse,FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';
import *as PostsAPI from '../utils/PostsAPI';
import *as CommentsAPI from '../utils/CommentsAPI';
function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class FormInstance extends Component {
    render (){
        return (
            <form>
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Comment text"
                    placeholder="comment text"
                />

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>category select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="react">react</option>
                        <option value="redux">redux</option>
                        <option value="udacity">udacity</option>
                    </FormControl>
                </FormGroup>
                <Button type="submit">Add Comment</Button>
            </form>
        );
    }
}



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

        return (
            <div>
                {posts.filter(post=>post.id===postId).map((post)=>(
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <h3>{post.author} </h3>
                        <p>{post.body}</p>
                        <h4><Button onClick={()=>{ this.setState({disable:true});increasePostsVote(post);PostsAPI.vote(post.id,"upVote")} } disabled={this.state.disable}><i className="fa fa-thumbs-o-up fa-lg"/> {post.voteScore}</Button>&nbsp;
                            <Button onClick={()=>{this.setState({disable:true});decreasePostsVote(post);PostsAPI.vote(post.id,"downVote")}} disabled={this.state.disable}><i className="fa fa-thumbs-o-down fa-lg"/> </Button>
                            <Button onClick={()=>this.setState({open:!this.state.open})}>comment&nbsp;<Badge>{post.commentCount}</Badge></Button>
                            &nbsp;<Button onClick={()=>removePosts(post)}>delete</Button>
                        </h4>
                        <Collapse in={this.state.open}>
                            <div>
                                {comments.map((comment)=>(
                                    <div key={comment.id}>
                                        <p>{comment.body}</p>
                                        <p>{comment.author}</p>
                                        <p> <Button onClick={()=>{increaseCommentsVote(comment);CommentsAPI.vote(comment.id,"upVote")}}><i className="fa fa-thumbs-o-up fa-lg"/> {comment.voteScore}</Button>&nbsp;
                                            <Button onClick={()=>{decreaseCommentsVote(comment);CommentsAPI.vote(comment.id,"downVote")}}><i className="fa fa-thumbs-o-down fa-lg"/> </Button>
                                            <Button >delete</Button>
                                        </p>
                                    </div>
                                ))}
                                <FormInstance/>
                            </div>
                        </Collapse>
                    </div>
                ))}

            </div>)
    }
}
export default Post;
