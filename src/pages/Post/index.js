import React, {useEffect,useState} from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'

import {getPost} from '../../api/post'

import './style.css'


const PostItem = ({match}) =>{

    const [post, setPost] = useState({});

    useEffect(() => {
        getPost(match.params.id).then(
            res => {
                setPost(res.data)
            }
        )
    }, []);

    return<div className='postItem'>
        <div className='postItem_title'>
            <h2>{post.title}</h2>
            <span>{post.author}</span>
        </div>
            <p>{post.body}</p>
        <div className='postItem_date'>
            <span>{post.data}</span>
            <span>{post.category}</span>
        </div>
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
)(PostItem)

