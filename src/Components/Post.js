import React,{Component} from "react";
import {Button,Badge,Collapse,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import *as PostsAPI from '../utils/PostsAPI';
import *as CommentsAPI from '../utils/CommentsAPI';
import EditPost from  './EditPost';
import EditComment from  './EditComment';
import {Route} from 'react-router-dom';

function randomWord(mount){
    let str = "",
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    for(let i=0; i<mount; i++){
        //round四舍五入为最接近的整数
        let pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

class FormInstance extends Component {
    constructor(props, context) {
        super(props, context);

        this.contentChange = this.contentChange.bind(this);
        this.authorChange=this.authorChange.bind(this);

        this.state = {
            content: '',
            author:''
        };
    }

    contentChange(e) {
        this.setState({ content: e.target.value });
    }
    authorChange(e){
        this.setState({ author: e.target.value });
    }


    render (){
        const timestamp = Date.parse(new Date());
        const {content,author}=this.state;
        const {postId}=this.props;
        const comment={
            id:randomWord(20),
            timestamp,
            body:content,
            author:author,
            parentId:postId
        };

        return (
            <form>
                <FormGroup controlId="formBasicText">
                    <ControlLabel>Comment content</ControlLabel>
                    <FormControl
                        className="comment_content"
                        type="text"
                        placeholder="Enter text"
                        onChange={this.contentChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup controlId="formBasicText">
                    <ControlLabel>Comment author</ControlLabel>
                    <FormControl
                        className="comment_author"
                        type="text"
                        placeholder="Enter text"
                        onChange={this.authorChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <Button
                    type="submit"
                    onClick={()=>{CommentsAPI.addComment(comment)}}
                >
                    Add Comment
                </Button>
            </form>
        );
    }
}



class Post extends  Component{
    state={
        open:false,
        disable:false,
        edit:false,
        commentEdit:false
    };

    render(){

        const {increasePostsVote,decreasePostsVote,increaseCommentsVote,
                decreaseCommentsVote,removePosts,removeComments}=this.props.state;
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
                {posts.filter(post=>post.id===postId&&!post.deleted).map((post)=>(
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <h3>{post.author} </h3>
                        <p>{post.body}</p>
                        <h4><Button onClick={()=>{ this.setState({disable:true});increasePostsVote(post);PostsAPI.vote(post.id,"upVote")} } disabled={this.state.disable}><i className="fa fa-thumbs-o-up fa-lg"/> {post.voteScore}</Button>&nbsp;
                            <Button onClick={()=>{this.setState({disable:true});decreasePostsVote(post);PostsAPI.vote(post.id,"downVote")}} disabled={this.state.disable}><i className="fa fa-thumbs-o-down fa-lg"/> </Button>
                            <Button onClick={()=>this.setState({open:!this.state.open})}>comment&nbsp;<Badge>{post.commentCount}</Badge></Button>
                            &nbsp;<Button onClick={()=>{this.setState({edit:!this.state.edit})}}>edit</Button>
                            &nbsp;<Button onClick={()=>{removePosts(post);PostsAPI.deletePost(post.id)}}>delete</Button>
                        </h4>
                        <Collapse in={this.state.edit}>
                            <div>
                                <Route render={()=>(<EditPost state={post}/>)}/>
                            </div>
                        </Collapse>
                        <Collapse in={this.state.open}>
                            <div>
                                {comments.filter((comment)=>!comment.deleted).map((comment)=>(
                                    <div key={comment.id}>
                                        <p>{comment.body}</p>
                                        <p>{comment.author}</p>
                                        <p> <Button onClick={()=>{increaseCommentsVote(comment);CommentsAPI.vote(comment.id,"upVote")}}><i className="fa fa-thumbs-o-up fa-lg"/> {comment.voteScore}</Button>&nbsp;
                                            <Button onClick={()=>{decreaseCommentsVote(comment);CommentsAPI.vote(comment.id,"downVote")}}><i className="fa fa-thumbs-o-down fa-lg"/> </Button>
                                            <Button onClick={()=>{this.setState({commentEdit:!this.state.commentEdit})}}>edit</Button>
                                            <Button onClick={()=>{removeComments(comment);CommentsAPI.deleteComment(comment.id)}}>delete</Button>
                                        </p>
                                        <Collapse in={this.state.commentEdit}>
                                            <div>
                                                <Route render={()=>(<EditComment state={comment}/>)}/>
                                            </div>
                                        </Collapse>
                                    </div>
                                ))}

                                <FormInstance postId={this.props.state.match.params.postId}/>
                            </div>
                        </Collapse>

                    </div>
                ))}

            </div>)
    }
}
export default Post;
