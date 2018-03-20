import React,{Component} from 'react';
import {Button,FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
import *as CommentsAPI from '../utils/CommentsAPI';

class EditComment extends Component {
    constructor(props, context) {
        super(props, context);

        this.contentChange = this.contentChange.bind(this);

        this.state = {
            content: '',
        };
    }

    contentChange(e) {
        this.setState({ content: e.target.value });
    }


    render (){
        const {content}=this.state;
        const comment={
            body:content
        };
        return (
            <React.Fragment>
                <form>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Post Content</ControlLabel>
                        <FormControl
                            className="comment_content"
                            type="text"
                            placeholder="Enter text"
                            onChange={this.contentChange}
                            defaultValue={this.props.state.body}
                        />
                        <FormControl.Feedback />
                    </FormGroup>

                    <Button
                        type="submit"
                        onClick={()=>CommentsAPI.editComment(this.props.state.id,comment)}
                    >
                            Edit Comment
                    </Button>
                </form>
            </React.Fragment>

        );
    }
}



export default EditComment;

