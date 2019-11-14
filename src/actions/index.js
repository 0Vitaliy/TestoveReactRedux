import { getPosts } from '../api/post'


export const postList = (post)=>{

    return{
        type:'ADD_POST',
        payload:post
    }
}

export const axiosPostList = ()=>{

    return (dispath)=>{
        return getPosts().then((res)=>{
            dispath(postList(res.data))
        });
    }
}
