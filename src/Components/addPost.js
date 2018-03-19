/**
 * Created by sxy on 2018/3/18.
 */
import React,{Component} from 'react';
import {Button,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import *as PostsAPI from '../utils/PostsAPI';
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
class AddPost extends Component {
    constructor(props, context) {
        super(props, context);

        this.contentChange = this.contentChange.bind(this);
        this.authorChange=this.authorChange.bind(this);
        this.titleChange=this.titleChange.bind(this);
        this.categoryChange=this.categoryChange.bind(this);

        this.state = {
            content: '',
            author:'',
            title:'',
            category:'react'
        };
    }

    contentChange(e) {
        this.setState({ content: e.target.value });
    }
    authorChange(e){
        this.setState({ author: e.target.value });
    }
    titleChange(e) {
        this.setState({ title: e.target.value });
    }
    categoryChange(e) {
        this.setState({ category: e.target.value });
    }


    render (){
        const timestamp = Date.parse(new Date());
        const {content,author,title,category}=this.state;
        const post={
            id:randomWord(20),
            timestamp,
            body:content,
            author:author,
            title:title,
            category:category
        };

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
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup controlId="formControlsSelect" onChange={this.categoryChange}>
                    <ControlLabel>Choose Category</ControlLabel>
                    <FormControl componentClass="select" placeholder="category" >
                        <option value="react">react</option>
                        <option value="redux">redux</option>
                        <option value="udacity">udacity</option>
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="formBasicText">
                    <ControlLabel>Post Content</ControlLabel>
                    <FormControl
                        className="comment_content"
                        type="text"
                        placeholder="Enter text"
                        onChange={this.contentChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup controlId="formBasicText">
                    <ControlLabel>Post Author</ControlLabel>
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
                    onClick={()=>{PostsAPI.addPost(post); this.setState({add:!this.props.state.add})}}
                >
                    Add Post
                </Button>
            </form>
        </div>

        );
    }
}



export default AddPost;
