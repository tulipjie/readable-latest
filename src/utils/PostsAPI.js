/**
 * Created by sxy on 2018/1/18.
 */
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

let token = localStorage.token;

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
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

