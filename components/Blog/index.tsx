// @ts-ignore
import React, {FC, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPostsAction } from '../../redux/actions/postsActions';
import {AppStateType} from "../../redux/reducers/rootReducer";

import Link from "next/link";

import styled from "styled-components";



const Blog:FC = () => {

    const posts = useSelector((state: AppStateType) => state.postsReducer.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsAction())
    },[])


    return (
        <PostsWrapper>
            {posts.map((item) => {
                return <Link key={item.id} href="/post/[id]" as={`/post/${item.id}`}>
                    <PostBlock>
                        <h2>{item.title}</h2>
                        <PostText>{item.body}</PostText>
                    </PostBlock>
                </Link>
            })}
        </PostsWrapper>
    );
}

const PostsWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
`;

const PostBlock = styled.div`
   width: 40%;  
   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
   margin-top: 30px;
   padding: 20px;
   border-radius: 10px;
   cursor: pointer;
`;

const PostText = styled.p` 
   text-overflow: ellipsis; 
   overflow: hidden;  
   white-space: nowrap; 
`;

export default Blog;



