/**
 * Created by sxy on 2018/1/31.
 */
import {ADD_POST,EDIT_POST,REMOVE_POST,
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



function posts(state={},action) {
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
        default:
            return state;

    }

}
function comments(state={},action){
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
function categories(state={},action) {
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
