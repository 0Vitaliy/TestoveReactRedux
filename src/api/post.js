import axios from "axios";

export async function getPosts() {
    return await axios.get('http://localhost:3001/posts/')
}

export async function postPosts(data) {
    await axios.post('http://localhost:3001/posts/', data)
}

export async function putPosts(id,data) {
    await axios.put(`http://localhost:3001/posts/${id}`, data)
}

export async function getPost(id) {
    return await axios.get(`http://localhost:3001/posts/${id}`)
}

export async function deletePost(id) {
    return await axios.delete(`http://localhost:3001/posts/${id}`)
}