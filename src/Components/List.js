/**
 * Created by sxy on 2018/3/12.
 */
import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import {Button,Badge,Collapse} from 'react-bootstrap';
import  '../css/index.css';
import *as PostsAPI from '../utils/PostsAPI';
import EditPost from './EditPost';


class List extends Component{
    state={
        open:false
    };
    render(){
        const {increasePostsVote,decreasePostsVote,removePosts}=this.props.state;
        return(
            <ul>
                {this.props.list.filter(post=>!post.deleted).map((post)=>(
                    <div key={post.id}>
                        <Link to={`${post.category}/${post.id}`}><h3>{post.title}</h3></Link>
                        <h4>{post.author}</h4>
                        <p className="content">{post.body}</p>
                        <div><Button onClick={()=>{increasePostsVote(post);PostsAPI.vote(post.id,"upVote")}}> <i className="fa fa-thumbs-o-up fa-lg"/> {post.voteScore}</Button>&nbsp;
                            <Button onClick={()=>{decreasePostsVote(post);PostsAPI.vote(post.id,"downVote")}}><i className="fa fa-thumbs-o-down fa-lg"/></Button>&nbsp;
                            <Button>comment&nbsp;<Badge>{post.commentCount}</Badge></Button>
                            &nbsp;<Button onClick={()=>{this.setState({open:!this.state.open})}}>edit</Button>
                            &nbsp;<Button onClick={()=>{removePosts(post);PostsAPI.deletePost(post.id)}}>delete</Button>
                        </div>
                        <Collapse in={this.state.open}>
                            <div>
                            <Route render={()=>(<EditPost state={post}/>)}/>
                            </div>
                        </Collapse>
                    </div>
                ))}

            </ul>
        )
    }
}
export default List;
