/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";

class Post extends  Component{

    render(){
        console.log(this.props.params.postId);
        return <div>Hello,Post</div>
    }
}
export default Post;
