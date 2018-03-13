/**
 * Created by sxy on 2018/3/12.
 */
import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap'

class Glide extends Component {
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
            <Carousel>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500" src={require('../picture/timg.jpg')}/>
                    <Carousel.Caption>
                        <h3>first category:react</h3>
                        <p>A JavaScript library for building user interfaces</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500"src={require('../picture/timg.jpg')}/>
                    <Carousel.Caption>
                        <h3>Second category:redux</h3>
                        <p>A predictable state container for JavaScript apps</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500" src={require('../picture/timg.jpg')}/>
                    <Carousel.Caption>
                        <h3>Third category:udacity</h3>
                        <p>A A learning website for Programming technology</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        )
    }
}

export default Glide;