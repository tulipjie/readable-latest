import React,{Component} from 'react';
import {Button,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import *as PostsAPI from '../utils/PostsAPI';

class EditPost extends Component {
    constructor(props, context) {
        super(props, context);

        this.contentChange = this.contentChange.bind(this);
        this.titleChange=this.titleChange.bind(this);

        this.state = {
            content: '',
            title:'',
        };
    }

    contentChange(e) {
        this.setState({ content: e.target.value });
    }
    titleChange(e) {
        this.setState({ title: e.target.value });
    }



    render (){
        const {content,title}=this.state;
        const post={
            body:content,
            title:title,
        };
        const {posts}=this.props.state;
        const item=Object.keys(this.props.state.posts)[0];
        return (
            <div>
                <form>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Post Title</ControlLabel>
                        <FormControl
                            className="post_title"
                            type="text"
                            placeholder="Enter text"
                            onChange={this.titleChange}
                            defaultValue={posts[item].title}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Post Content</ControlLabel>
                        <FormControl
                            className="comment_content"
                            type="text"
                            placeholder="Enter text"
                            onChange={this.contentChange}
                            defaultValue={posts[item].body}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                   <Button
                       type="submit"
                        onClick={()=>PostsAPI.editPost(posts[item].id,post)}
                    >
                        Edit Post
                    </Button>
                </form>

            </div>

        );
    }
}



export default EditPost;
