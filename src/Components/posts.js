/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";
import {Route} from 'react-router-dom';
import Post from "./post";

class Posts extends  Component{
    render(){
        return <div>Hello,Posts
        <Route path="/posts/post"  component={Post}/>
        </div>
    }
}

export default Posts;