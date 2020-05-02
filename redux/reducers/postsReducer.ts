import {
    GET_POSTS_REQUEST,
    GET_POST_ITEM_REQUEST
} from '../actions/postsActions';

import {PostsType, PostItemType, ActionType} from '../../types/types'

const initialState = {
    posts: [] as Array<PostsType>,
    postItem: {} as PostItemType
}

type InitialStateType = typeof initialState

const postsReducer = (state = initialState, { type, payload }:ActionType): InitialStateType => {
    switch (type) {
        case GET_POSTS_REQUEST:
            return {
                ...state,
                posts: payload
            };
        case GET_POST_ITEM_REQUEST:
            return {
                ...state,
                postItem: payload
            };
        default:
            return {
                ...state
            };
    }
};

// @ts-ignore
export default postsReducer;
