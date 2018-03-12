/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";

class Home extends  Component{

    render(){
        console.log(this.props.posts);
        return <div>Hello,wolrd{this.props.store}</div>
    }
}

export default Home;

