/**
 * Created by sxy on 2018/3/20.
 */
import React,{Component} from 'react';

class NotFound extends  Component{
    render (){
        return (
            <div>
                <h3>Not Found <code>{window.location.pathname}</code></h3>
            </div>
        )
    }
}

export default NotFound;