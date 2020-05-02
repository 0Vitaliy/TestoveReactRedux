import React, {useState, FC, SyntheticEvent, ChangeEvent} from "react";
import { useDispatch } from "react-redux";

import { createPostItemAction } from "../../../redux/actions/postsActions";

import styled from "styled-components";



const NewPost:FC = () => {

    const dispatch = useDispatch();

    type ValuesType = {
        title: string
        body: string
    }

    const [values, setValues] = useState<ValuesType>({title: "", body: ""});

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    };

    const onClick = (e:SyntheticEvent) => {
        e.preventDefault();
        dispatch(createPostItemAction(values));
    };

    return (
        <Form onSubmit={onClick}>
            <Input
                name='title'
                value={values.title}
                onChange={handleInputChange}
            />
            <Textarea
                name='body'
                value={values.body}
                onChange={handleInputChange}
            />
            <Button type='submit'>Create</Button>
        </Form>
    );
};

const Form = styled.form`
    display:flex;
    flex-direction:column;
    max-width:400px;
    margin-top:40px;
    margin: auto 
`;

const Input = styled.input`
   margin-top:20px; 
`;
const Textarea = styled.textarea`
   margin-top:20px; 
   max-width:100%;
`;

const Button = styled.button`
   margin-top:20px; 
   max-width:100px 
`;

// @ts-ignore
export default NewPost;
