/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";
import {Grid,Row,Col} from 'react-bootstrap';
import {Route} from 'react-router-dom';
import Glide from '../Components/glide';
import Nav from '../Components/list';
import *as PostsAPI from '../utils/PostsAPI';
import *as CategoriesAPI from '../utils/CategoriesAPI';
import {connect} from 'react-redux';
import {addPost,addComment,removePost,removeComment,editPost,editComment} from '../Actions';

class Home extends  Component{
    state={
        updatePosts:[],
        updateComments:[],
        updateCategories:[]
    };
    componentDidMount(){
        PostsAPI.getAll().then((updatePosts) =>{
            this.setState({updatePosts})
        });
        CategoriesAPI.getAll().then((updateCategories) =>{
            this.setState({updateCategories})
        });
    }

    render(){
        const posts=[];
        const item=Object.keys(this.props.posts);
        for (let i=0;i<item.length;i++){
            posts.push(this.props.posts[item[i]])
        }

        const comments=[];
        const list=Object.keys(this.props.comments);
        for (let j=0;j<list.length;j++){
            comments.push(this.props.comments[list[j]])
        }
        return (
            <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <Route   render={()=>(<Nav state={this.props}/>)}/>
                    </Col>
                    <Col xs={12} md={4}>
                        <Route   render={()=>(<Glide state={this.props}/>)}/>
                    </Col>
                </Row>
            </Grid>

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
        addPost:(data) =>dispatch(addPost(data)),
        addComment:(data)=>dispatch(addComment(data)),
        removePost:(data)=>dispatch(removePost(data)),
        removeComment:(data)=>dispatch(removeComment(data)),
        editPost:(data)=>dispatch(editPost(data)),
        editComment:(data)=>dispatch(editComment(data)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

