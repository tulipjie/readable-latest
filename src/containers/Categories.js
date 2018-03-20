/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";
import {connect} from 'react-redux';
import NavI from '../Components/NavI';
import {addPost} from '../Actions';
import *as PostsAPI from '../utils/PostsAPI';
import List from '../Components/List';
import {Route} from 'react-router-dom';

class Categories extends  Component{
    componentDidMount(){
        const {addPosts}=this.props;
        const {category}=this.props.match.params;
        PostsAPI.getByCategory(category).then((posts) =>{
            posts.sort((a,b)=>{
                return b.voteScore-a.voteScore
                }).map((post)=>{
                return addPosts(post)
                });
            });
    }
    render(){
        const list=[];
        const item=Object.keys(this.props.posts);
        for (let j=0;j<item.length;j++){
            list.push(this.props.posts[item[j]])
        }
        return (
            <div>
                <NavI/>
                <Route render={()=><List state={this.props} list={list}/>}/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        posts:state.posts
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        addPosts:(data) =>dispatch(addPost(data)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);
