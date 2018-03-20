/**
 * Created by sxy on 2018/1/31.
 */

export const ADD_POST='ADD_POST';
export const REMOVE_POST='REMOVE_POST';
export const INCREASE_POST_VOTE='INCREASE_POST_VOTE';
export const DECREASE_POST_VOTE='DECREASE_POST_VOTE';
export const ADD_COMMENT='ADD_COMMENT';
export const REMOVE_COMMENT='REMOVE_COMMENT';
export const INCREASE_COMMENT_VOTE='INCREASE_COMMENT_VOTE';
export const DECREASE_COMMENT_VOTE='DECREASE_COMMENT_VOTE';
export const GET_CATEGORY='GET_CATEGORY';



export const addPost=({id,timestamp,title,body,author,category,voteScore,deleted,commentCount})=>{
    return{
        type:ADD_POST,
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


export const addComment=({id,parentId,timestamp,body,author,voteScore,deleted,parentDeleted})=>{
    return{
        type:ADD_COMMENT,
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
export const removePost=({id,deleted})=>{
    return{
        type:REMOVE_POST,
        id,
        deleted
    }
};

export const removeComment=({id,deleted})=>{
    return{
        type:REMOVE_COMMENT,
        id,
        deleted
    }
};
export const increasePostVote=({id, voteScore})=>{
    return {
        type:INCREASE_POST_VOTE,
        id,
        voteScore
    }
};
export const decreasePostVote=({id,  voteScore})=>{
    return {
        type:DECREASE_POST_VOTE,
        id,
        voteScore
    }
};
export const increaseCommentVote=({id,voteScore})=>{
    return {
        type:INCREASE_COMMENT_VOTE,
        id,
        voteScore
    }
};
export const decreaseCommentVote=({id,voteScore})=>{
    return {
        type:DECREASE_COMMENT_VOTE,
        id,
        voteScore
    }
};
export const getCategory=({name,path})=>{
    return {
        type: GET_CATEGORY,
        name,
        path
    }

};