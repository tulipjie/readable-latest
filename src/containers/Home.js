/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";
import {Grid,Row,Col,Button} from 'react-bootstrap';
import {Route} from 'react-router-dom';
import Glide from '../Components/Glide';
import List from '../Components/List';
import NavI from '../Components/NavI';
import AddPost from '../Components/AddPost';
import * as PostsAPI from '../utils/PostsAPI';
import * as CategoriesAPI from '../utils/CategoriesAPI';
import {connect} from 'react-redux';
import * as actions from '../Actions';

class Home extends  Component{
    state={
        add:false
    };
    componentDidMount(){
        const {addPosts,getCategories}=this.props;
        PostsAPI.getAll().then((posts) =>{
            posts.sort((a,b)=>{
                return b.voteScore-a.voteScore
            }).map((post)=>{
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
        const list=[];
        const item=Object.keys(this.props.posts);
        for (let i=0;i<item.length;i++){
            list.push(this.props.posts[item[i]])
        }
        return (
            <div>
                <Route render={()=>( <NavI state={this.state}/>)}/>

                {!this.state.add?
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                <Route   render={()=>(<List  state={this.props} list={list}/>)}/>
                            </Col>
                            <Col xs={12} md={4}>
                                <Route   render={()=>(<Glide state={this.props}/>)}/>
                            </Col>
                        </Row>
                        <Button  onClick={()=>{this.setState({add:!this.state.add})}}> Add post</Button>
                    </Grid>:
                    <div>
                        <Route render={()=>(<AddPost state={this.state}/>)}/>
                    </div>
                }
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
        addPosts:(data) =>dispatch(actions.addPost(data)),
        addComments:(data)=>dispatch(actions.addComment(data)),
        removePosts:(data)=>dispatch(actions.removePost(data)),
        removeComments:(data)=>dispatch(actions.removeComment(data)),
        getCategories:(data)=>dispatch(actions.getCategory(data)),
        increasePostsVote:(data)=>dispatch(actions.increasePostVote(data)),
        decreasePostsVote:(data)=>dispatch(actions.decreasePostVote(data))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

