/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";
import {Grid,Row,Col} from 'react-bootstrap';
import {Route} from 'react-router-dom';
import Glide from '../Components/glide';
import List from '../Components/list';
import NavI from '../Components/nav';
import *as PostsAPI from '../utils/PostsAPI';
import *as CategoriesAPI from '../utils/CategoriesAPI';
import {connect} from 'react-redux';
import {addPost,addComment,removePost,removeComment,editPost,editComment,getCategory} from '../Actions';

class Home extends  Component{
    componentDidMount(){
        const {addPosts,getCategories}=this.props;
        PostsAPI.getAll().then((posts) =>{
            posts.map((post)=>{
                 return addPosts(post)
            }) ;
        });
        CategoriesAPI.getAll().then((categories) =>{
            categories.map((category)=>{
                return getCategories(category)
            })
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
                <NavI/>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <Route   render={()=>(<List state={this.props}/>)}/>
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
        addPosts:(data) =>dispatch(addPost(data)),
        addComments:(data)=>dispatch(addComment(data)),
        removePosts:(data)=>dispatch(removePost(data)),
        removeComments:(data)=>dispatch(removeComment(data)),
        editPosts:(data)=>dispatch(editPost(data)),
        editComments:(data)=>dispatch(editComment(data)),
        getCategories:(data)=>dispatch(getCategory(data))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

