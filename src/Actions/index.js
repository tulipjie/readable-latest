/**
 * Created by sxy on 2018/1/31.
 */
export const ADD_POST='ADD_POST';
export const REMOVE_POST='REMOVE_POST';
export const EDIT_POST='EDIT_POST';
export const SHOW_POST='SHOW_POST';
export const ADD_COMMENT='ADD_COMMENT';
export const REMOVE_COMMENT='REMOVE_COMMENT';
export const EDIT_COMMENT='EDIT_COMMENT';
export const showPost={
        type:SHOW_POST
};
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

export const addComment=({id,parentId,timestamp,title,body,author,voteScore,deleted})=>{
    return{
        type:ADD_COMMENT,
        id,
        parentId,
        timestamp,
        title,
        body,
        author,
        voteScore,
        deleted
    }
};
export const removePost=({id,timestamp,title,body,author,category,voteScore,deleted,commentCount})=>{
    return{
        type:REMOVE_POST,
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

export const removeComment=({id,parentId,timestamp,title,body,author,voteScore,deleted})=>{
    return{
        type:REMOVE_COMMENT,
        id,
        parentId,
        timestamp,
        title,
        body,
        author,
        voteScore,
        deleted
    }
};
export const editPost=({id,timestamp,title,body,author,category,voteScore,deleted,commentCount})=>{
    return{
        type:EDIT_POST,
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
export const editComment=({id,parentId,timestamp,body,author,voteScore,deleted})=>{
    return{
        type:EDIT_COMMENT,
        id,
        parentId,
        timestamp,
        body,
        author,
        voteScore,
        deleted
    }
};