import {FC, SyntheticEvent, useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {AppStateType} from '../../redux/reducers/rootReducer'
import { useRouter } from 'next/router'

import {
    getPostItemAction,
    deletePostItemAction,
    addCommentAction
} from "../../redux/actions/postsActions";

import styled from "styled-components";


const Post:FC = () => {

    const postItem = useSelector((state: AppStateType) => state.postsReducer.postItem);
    const dispatch = useDispatch();

    const router = useRouter();
    const {pid} = router.query;

    useEffect(() => {
        dispatch(getPostItemAction(pid));
    }, [pid]);

    const deletePost = () => {
        dispatch(deletePostItemAction({id:pid as string}));
    };

    const [body, setBody] = useState<string>('');

    const addComment = (e:SyntheticEvent) => {
        e.preventDefault();
        dispatch(addCommentAction({postId: pid, body}));
    };

    return (
        <Block>
            <Title>{postItem.title} {postItem.id}</Title>
            <Text>Post {postItem.body}</Text>
            <ButtonDelete onClick={deletePost}>Delete Post</ButtonDelete>
            <CommentTitle>Comments : {postItem.comments && postItem.comments.length}</CommentTitle>
            {postItem.comments && postItem.comments.map((item) => {
                return <BlockComment key={item.id}>
                    <p>{item.body}</p>
                </BlockComment>;
            })}
            <Form onSubmit={addComment}>
                <Textarea onChange={e=>setBody(e.target.value)}/>
                <AddComment>Add comment</AddComment>
            </Form>
        </Block>
    );
};

const Block = styled.div`
  max-width:80%; 
  margin:auto;
`;

const BlockComment = styled.div`
  margin-left:20px; 
`;

const Form = styled.form` 
  margin-left:20px;
  display:flex;
  flex-direction:column;
  max-width:400px;
  margin-top:40px; 
`;

const CommentTitle = styled.h2`
       color: #313b3f;
`;

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center; 
      color: #313b3f;
`;

const Text = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: #313b3f;
`;

const ButtonDelete = styled.button`
   background: red;
   cursor: pointer;
   padding: 10px;
   color: #fff;
   border: none;
   border-radius: 10px;
`;

const Textarea = styled.textarea`
    
`;

const AddComment = styled.button`
  margin-top:20px;  
  max-width:100px
`;

export default Post
