import axios from "axios";
import {CommentType} from "../types/types";

const baseURL = 'https://simple-blog-api.crew.red';

export const getPosts = () => {
    return axios.get(`${baseURL}/posts`)
}

export const getPostItem = (id:string) => {
    return axios.get(`${baseURL}/posts/${id}?_embed=comments`)
}

export const createPost = ({title, body}) => {
    return axios.post(
        `${baseURL}/posts`,
        {
            title,
            body
        }
    )
}

export const deletePost = (id:string) => {
    return axios.delete(`${baseURL}/posts/${id}`)
}

export const postComment = ({postId, body}:CommentType) => {
    return axios.post(
        `${baseURL}/comments`,
        {
            postId,
            body
        }
    )
}
