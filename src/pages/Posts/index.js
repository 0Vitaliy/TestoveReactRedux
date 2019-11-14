import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { deletePost } from '../../api/post'
import { filterPost } from '../../utils/filter'
import { axiosPostList } from './../../actions'
import { TextField, Button, Select, MenuItem, CircularProgress } from '@material-ui/core'

import moment from 'moment'

import './style.css'

const Posts = ({ pos, addList }) =>{

    const [ search, setSearch ] = useState('');
    const [ category, onChangeCategory ] = useState('');

    useEffect(() => {
        addList([]);
    }, []);

    const delPost = async (id) => {
        deletePost(id).then(()=>{
            addList([]);
        })
    };

    const handleChangeCategory = event => {
        onChangeCategory(event.target.value);
    };

    if(!pos.length){
        return <div className='loading'><CircularProgress /></div>
    }

    return<div>
        <div className='filterBlock'>
            <TextField
                id="outlined-search"
                label="Search"
                type="search"
                margin="normal"
                variant="outlined"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
            <Select
                displayEmpty
                value={category}
                onChange={handleChangeCategory}
            >
                <MenuItem  value="">
                    <em>Category</em>
                </MenuItem>
                <MenuItem value="Sport">Sport</MenuItem>
                <MenuItem value='Policy' >Policy</MenuItem>
                <MenuItem value='Economy' >Economy</MenuItem>
            </Select>
        </div>
        <div className='posts'>
            {filterPost(pos, category, search).map((post, index)=>
                <div className='post' key={index}>
                    <div className='postTitle'>
                        <h2>{post.title}</h2>
                        <span>{post.author}</span>
                    </div>
                    <p className='postText'>{post.body}</p>
                    <div className='postDate'>
                        <span>{moment(post.date).fromNow()}</span>
                        <span>{post.category}</span>
                    </div>
                    <div className='btnBlock'>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={()=>delPost(post.id)}
                        >Видалити</Button>
                        <Link to={`/post/${post.id}`}>
                            <Button
                                variant="contained"
                            >Редагувати</Button>
                        </Link>
                        <Link to={`/posts/${post.id}`}>
                            <Button
                                variant="contained"
                                color="primary"
                            >Переглянути</Button>
                        </Link>

                    </div>
                </div>
            )}
        </div>
    </div>
}

const mapStateToProps = function(state) {
    return {
        pos: state.posts,
    }
}

const mapDispatchToProps = function(dispatch) {
    return bindActionCreators( {addList:axiosPostList},dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)

