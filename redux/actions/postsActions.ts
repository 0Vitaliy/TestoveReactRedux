//Action Types
import {getPostItem, getPosts, deletePost, createPost, postComment} from "../../api/postApi";
import Router from 'next/router'
import {PostsType} from '../../types/types'
import {string} from "prop-types";
export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POST_ITEM_REQUEST = "GET_POST_ITEM_REQUEST";

//Action Creator

type  getPostsRequestType = {
    type: typeof GET_POSTS_REQUEST
    payload: PostsType
}

const getPostsRequest = (payload):getPostsRequestType => ({
   type: GET_POSTS_REQUEST,
    payload
});

type  getPostItemRequestType = {
    type: typeof GET_POST_ITEM_REQUEST
    payload: any
}

const getPostItemRequest = (payload):getPostItemRequestType => ({
    type: GET_POST_ITEM_REQUEST,
    payload
});

export const createPostItemAction = (data) => async (dispatch:any) => {

    try {
        await createPost(data)

        dispatch(getPostsAction())
        await Router.push('/')
    }catch (e) {
        alert(e)
    }
}

export const deletePostItemAction = ({id}:{id:string}) => async (dispatch:any) => {

    try {
        await deletePost(id)

        dispatch(getPostsAction())
        await Router.push('/')
    }catch (e) {
        alert(e)
    }
}

export const getPostItemAction = (id) => async (dispatch:any) => {

    try {
        const { data } = await getPostItem(id)

        dispatch(getPostItemRequest(data))
    }catch (e) {
        alert(e)
    }
}

export const getPostsAction = () => async (dispatch:any) => {

    try {
        const { data } = await getPosts()

        dispatch(getPostsRequest(data))
    }catch (e) {
      alert(e)
    }
}

export const addCommentAction = (data) => async (dispatch:any) => {

    try {
        await postComment(data)

        dispatch(getPostItemAction(data.postId))
    }catch (e) {
        alert(e)
    }
}