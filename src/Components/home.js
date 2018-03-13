/**
 * Created by sxy on 2018/3/11.
 */
import React,{Component} from "react";
import {Grid,Row,Col} from 'react-bootstrap';
import {Route} from 'react-router-dom';
import Glide from './homeComponents/glide';
import Nav from './homeComponents/list';

class Home extends  Component{


    render(){
        const posts=[];
        const item=Object.keys(this.props.state.posts);
        for (let i=0;i<item.length;i++){
            posts.push(this.props.state.posts[item[i]])
        }

        const comments=[];
        const list=Object.keys(this.props.state.comments);
        for (let j=0;j<list.length;j++){
            comments.push(this.props.state.comments[list[j]])
        }
        return (
            <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <Route   render={()=>(<Nav state={this.props.state}/>)}/>
                    </Col>
                    <Col xs={12} md={4}>
                        <Route   render={()=>(<Glide state={this.props.state}/>)}/>
                    </Col>
                </Row>
            </Grid>

        </div>)
    }
}

export default Home;

