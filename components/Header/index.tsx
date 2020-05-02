// @ts-ignore
import React, {FC} from 'react';

import Link from 'next/link'

import styled from "styled-components";


export const Header:FC = () => {

    return (
        <HeaderWrapper>
            <Link href="/">
                <LinkText>Posts</LinkText>
            </Link>
            <Link href="/post/new_post">
                <LinkText>New post</LinkText>
            </Link>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    background:#090a0b;
    padding:10px;
    text-align:center
`;

const LinkText = styled.a`
   text-decoration:none;
   color:#fff;
   margin:0 10px; 
`;


