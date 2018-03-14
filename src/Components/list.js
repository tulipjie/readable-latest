/**
 * Created by sxy on 2018/3/12.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Button,Badge} from 'react-bootstrap';
import  '../css/index.css'

class Nav extends Component{
    render(){

        const posts=[];
        const comments=[];
        const item=Object.keys(this.props.state.posts);
        for (let i=0;i<item.length;i++){
            posts.push(this.props.state.posts[item[i]])
        }
        const list=Object.keys(this.props.state.comments);
        for (let j=0;j<list.length;j++){
            comments.push(this.props.state.comments[list[j]])
        }

        return(
            <ul>
                {posts.filter(post=>!post.deleted).map((post)=>(
                    <div key={post.id}>
                        <Link to={`${post.category}/${post.id}`}><h3>{post.title}</h3></Link>
                        <h4>{post.author}</h4>
                        <p className="content">{post.body}</p>
                        <div><Button><i className="fa fa-thumbs-o-up fa-lg"/> {post.voteScore}</Button>&nbsp;

                            <span><Button>comment&nbsp;<Badge>{post.commentCount}</Badge></Button> </span>

                            &nbsp;<span><Button>delete</Button></span>
                        </div>
                    </div>
                ))}

            </ul>
        )
    }
}
export default Nav;
