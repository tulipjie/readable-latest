/**
 * Created by sxy on 2018/3/12.
 */
import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Glide extends Component {

    render(){
        const categories=[];
        const item=Object.keys(this.props.state.categories);
        for (let i=0;i<item.length;i++){
            categories.push(this.props.state.categories[item[i]])
        }
         return (
             <Carousel>
                {categories.map((category)=>(
                    <Carousel.Item key={category.name}>
                        <Link to={`/${category.name}`}><img width={500} height={500} alt="500x500" src={require('./picture/timg.jpg')}/></Link>
                        <Carousel.Caption >
                            <h3>To category:{category.name}</h3>
                            <p>The path of the category is {category.path}</p>
                         </Carousel.Caption>
                    </Carousel.Item>
                ))}
             </Carousel>
          )
    }
}

export default Glide;