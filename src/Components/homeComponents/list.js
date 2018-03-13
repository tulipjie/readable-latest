/**
 * Created by sxy on 2018/3/12.
 */
import React,{Component} from 'react';
import {Collapse,Button} from 'react-bootstrap';

class Nav extends Component{
    state={
        open:false
    };
    render(){

        const posts=[];
        const item=Object.keys(this.props.state.posts);
        for (let i=0;i<item.length;i++){
            posts.push(this.props.state.posts[item[i]])
        }

        const comments=[];
        const list=Object.keys(this.props.state.comments);
        for (let j=0;j<list.length;j++){
            comments.push(this.props.state.comments[list[j]])
        }
        return(
            <ul>
                {posts.map((post)=>(
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <h4>{post.author}</h4>
                        <p className="content">{post.body}</p>
                        <div><i className="fa fa-thumbs-o-up fa-lg"/> {post.voteScore}

                            <span>

                                        <Button onClick={() => this.setState({open:!this.state.open})}>
                                            comment
                                        </Button>
                                        <Collapse in={this.state.open}>
                                            <div>

                                                {comments.map((comment)=>(
                                                    <div key={comment.id}>
                                                        <p>{comment.author}</p>
                                                        <p>{comment.body}</p>
                                                        <p><i  className="fa fa-thumbs-o-up fa-lg"/>{comment.voteScore}</p>

                                                    </div>
                                                ))}

                                            </div>
                                        </Collapse>
                                    </span></div>
                    </div>
                ))}

            </ul>
        )
    }
}
export default Nav;
