/**
 * Created by sxy on 2018/1/31.
 */
import {ADD_POST,REMOVE_POST, ADD_COMMENT,REMOVE_COMMENT,GET_CATEGORY,
    INCREASE_POST_VOTE,DECREASE_POST_VOTE,INCREASE_COMMENT_VOTE,DECREASE_COMMENT_VOTE} from '../Actions';
import {combineReducers} from 'redux';



function posts(state={},action) {
    const {id, timestamp, title, body, author, category, voteScore, deleted,commentCount}=action;
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
                    deleted,
                commentCount
                }

            };
        case INCREASE_POST_VOTE:
            return {
                ...state,
                [id]:{
                    ...state[id],
                    voteScore:voteScore+1
                }
            };
        case DECREASE_POST_VOTE:
            return{
                ...state,
                [id]:{
                    ...state[id],
                    voteScore:voteScore-1
                }

            };
        case REMOVE_POST:
            return{
                ...state,
                [id]:{
                    ...state[id],
                    deleted:true
                }
            };
        default:
            return state;
    }

}
function comments(state={},action){
    const {id,parentId,timestamp,body,author,voteScore,deleted,parentDeleted}=action;
    switch (action.type){
        case ADD_COMMENT:
            return {
                ...state,
                [id]:{
                    id,
                    parentId,
                    timestamp,
                    body,
                    author,
                    voteScore,
                    deleted,
                    parentDeleted
                }
            };
        case INCREASE_COMMENT_VOTE:
            return{
                ...state,
                [id]:{
                    ...state[id],
                    voteScore:voteScore+1
                }
            };
        case DECREASE_COMMENT_VOTE:
            return{
                ...state,
                [id]:{
                    ...state[id],
                    voteScore:voteScore-1
                }
            };
        case REMOVE_COMMENT:
            return {
                ...state,
                [id]:{
                    ...state[id],
                    deleted:true
                }
            };
        default :
            return state;
    }
}
function categories(state={},action) {
    const {name,path}=action;
    switch(action.type){
        case GET_CATEGORY:
            return{
                ...state,
                [name]:{
                    name,
                    path
                }
            };
        default:
            return state;
    }
}


export default combineReducers({
    posts,
    comments,
    categories
})
