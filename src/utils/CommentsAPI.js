/**
 * Created by sxy on 2018/1/18.
 */
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

let token = localStorage.token;

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
};



export const getByParent = (parentId)=>
    fetch(`${api}/posts/${parentId}/comments`,{headers})
        .then(res => res.json())
        .then(data => data);
export const vote=(id,option)=>
    fetch(`${api}/comments/${id}`,{
        method:'POST',
        headers,
        body:JSON.stringify({"option":option})
        }).then(res=>res.json());
export const deleteComment=(id)=>
    fetch(`${api}/comments/${id}`,{
        method:'DELETE',
        headers
    }).then(res=>res.json());

export const editComment=(id,comment)=>
    fetch(`${api}/comments/${id}`,{
        method:'PUT',
        headers,
        body:JSON.stringify(comment)
    }).then(res=>res.json());

export const addComment=(comment)=>
    fetch(`${api}/comments`,{
        method:'POST',
        headers,
        body:JSON.stringify(comment)
    }).then(res=>res.json());











