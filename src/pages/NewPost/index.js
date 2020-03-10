import React, {useEffect,useState} from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'

import { Select, MenuItem, Input, Button } from '@material-ui/core'
import {Editor, EditorState} from 'draft-js';
import moment from 'moment'

import {postPosts, putPosts, getPost} from '../../api/post'

import './styles.css'


const PostEditor = ({match}) =>{

    const [editorState, setEditorState] = React.useState(
        EditorState.createEmpty()
    );

    const [dataAddPost, setDataAddPost] = useState({
            title: '',
            author: '',
            body:'',
            date:'',
            category:''
        });

    const addPost = () =>{
        postPosts({...dataAddPost})
    }

    const editPosts = () =>{
        putPosts(match.params.id,{...dataAddPost})
    }

    useEffect(() => {
        if(match.params.id) {
            getPost(match.params.id).then(
                res => {
                    setDataAddPost(res.data)
                }
            )
        }else {
            setDataAddPost({
                title: "",
                author: "",
                body:'',
                date:moment().format('YYYY-MM-DD'),
                category:''})
        }
    }, [match]);

    const onChangeTitle = (e) =>{
        setDataAddPost({...dataAddPost,[e.target.name]:e.target.value});
    }

    return<div className="blockFormPostEditor">
        <form className='formAddPost'>
            <Input
                name='title'
                onChange={onChangeTitle}
                value={dataAddPost.title}
                placeholder='title'
                inputProps={{
                    'aria-label': 'description',
                }}
            />
            <Input
                name='author'
                onChange={onChangeTitle}
                value={dataAddPost.author}
                placeholder='author'
                inputProps={{
                    'aria-label': 'description',
                }}
            />
            <Input
                type='date'
                name='date'
                placeholder='date'
                inputProps={{
                    'aria-label': 'description',
                }}
                value={dataAddPost.date}
                onChange={onChangeTitle}
            />
            <Input
                name='body'
                placeholder='body'
                inputProps={{
                    'aria-label': 'description',
                }}
                value={dataAddPost.body}
                onChange={onChangeTitle}
            />
            <Select
                name='category'
                displayEmpty
                value={dataAddPost.category}
                onChange={onChangeTitle}
            >
                <MenuItem disabled value="">
                    <em>Category</em>
                </MenuItem>
                <MenuItem value="Sport">Sport</MenuItem>
                <MenuItem value='Policy' >Policy</MenuItem>
                <MenuItem value='Economy' >Economy</MenuItem>
            </Select>
            {(match.params.id) ?
            <Button
                disabled={!dataAddPost.title || !dataAddPost.author || !dataAddPost.date || !dataAddPost.body || !dataAddPost.category}
                variant="contained"
                color="primary"
                onClick={editPosts}
            >Edit Post</Button>
            :<Button
                disabled={!dataAddPost.title || !dataAddPost.author || !dataAddPost.date || !dataAddPost.body || !dataAddPost.category}
                variant="contained"
                color="primary"
                onClick={addPost}
            >Add Post</Button>}
        </form>
    </div>
};

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {},dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostEditor)

