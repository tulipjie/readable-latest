/**
 * Created by sxy on 2018/1/31.
 */
import {ADD_POST,EDIT_POST,REMOVE_POST,SHOW_POST,
         ADD_COMMENT,EDIT_COMMENT,REMOVE_COMMENT} from '../Actions';
import {combineReducers} from 'redux';
// import *as PostsAPI from '../utils/PostsAPI';
// //产生随机序列
// function randomWord(mount){
//     let str = "",
//         arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//
//     // 随机产生
//     for(let i=0; i<mount; i++){
//         //round四舍五入为最接近的整数
//         let pos = Math.round(Math.random() * (arr.length-1));
//         str += arr[pos];
//     }
//     return str;
// }

const postInitialState={
       "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.知乎是网络问答社区，连接各行各业的用户。用户分享着彼此的知识、经验和见解，为中文互联网源源不断地提供多种多样的信息。'+
    '准确地讲，知乎更像一个论坛：用户围绕着某一感兴趣的话题进行相关的讨论，同时可以关注兴趣一致的人。对于概念性的解释，网络百科几乎涵盖了你所有的疑问；但是对于发散思维的整合，却是知乎的一大特色。2017年11月8日，知乎入选时代影响力·中国商业案例TOP30。[1]2018年3月2日，北京网信办发布紧急通知，“知乎”平台因管理不严，传播违法违规信息，根据相关法律法规，要求各应用商店下架“知乎”App七天。[2]',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2
},
"6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0
}



};
const commentInitialState={
    "894tuq4ut84ut8v4t8wun89g": {
        id: '894tuq4ut84ut8v4t8wun89g',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo',
        voteScore: 6,
        deleted: false,
        parentDeleted: false
    },
    "8tu4bsun805n8un48ve89": {
        id: '8tu4bsun805n8un48ve89',
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1469479767190,
        body: 'Comments. Are. Cool.',
        author: 'thingone',
        voteScore: -5,
        deleted: false,
        parentDeleted: false
    }
};
const initialCategories=[
    {
        name: 'react',
        path: 'react'
    },
    {
        name: 'redux',
        path: 'redux'
    },
    {
        name: 'udacity',
        path: 'udacity'
    }
];


function posts(state=postInitialState,action) {
    const {id, timestamp, title, body, author, category, voteScore, deleted}=action;
    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                [id]:{
                    id,
                    timestamp,
                    title,
                    body,
                    author,
                    category,
                    voteScore,
                    deleted
                }

            };
        case EDIT_POST:
            return {

            };
        case REMOVE_POST:
            return{
                ...state,
                [id]:{
                    ...state[id],
                    [deleted]:!deleted
                }
            };
        case SHOW_POST:
            return state;
        default:
            return state;

    }

}
function comments(state=commentInitialState,action){
    switch (action.type){
        case ADD_COMMENT:
            return {};
        case EDIT_COMMENT:
            return {};
        case REMOVE_COMMENT:
            return {};
        default :
            return state;
    }
}
function categories(state=initialCategories,action) {
    switch(action.type){
        default:
            return state;
    }
}


export default combineReducers({
    posts,
    comments,
    categories
})
