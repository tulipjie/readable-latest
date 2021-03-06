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

export const getAll = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(data => data);

export const get=(id)=>
    fetch(`${api}/posts/${id}`,{headers})
        .then(res=>res.json())
        .then(data=>data);
export const vote=(id,option)=>
    fetch(`${api}/posts/${id}`,
        {
            method:'POST',
            headers,
            body:JSON.stringify({"option":option})
        })
        .then(res=>res.json());
export const getByCategory=(category)=>
    fetch(`${api}/${category}/posts`,{headers})
        .then(res=>res.json())
        .then(data=>data);
export const deletePost=(id)=>
    fetch(`${api}/posts/${id}`,
        {
            headers,
            method:'DELETE'
        })
        .then(res=>res.json());
export const addPost=(post)=>
    fetch(`${api}/posts`,
        {
            method:'POST',
            headers,
            body:JSON.stringify(post)
        })
        .then(res=>res.json());
export const editPost=(id,post)=>
    fetch(`${api}/posts/${id}`,
        {
            method:'PUT',
            headers,
            body:JSON.stringify(post)
        })
        .then(res=>res.json());








