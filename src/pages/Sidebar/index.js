import React from 'react'

import {connect} from "react-redux";
import {Link} from "react-router-dom";

import './styles.css'


const Sidebar = () =>{

    return<div className='sidebar'>
        <Link to="/" >Home</Link>
        <Link to="/posts" >Posts</Link>
        <Link to="/post/new" >New Post</Link>
    </div>
}

export default connect()(Sidebar)

