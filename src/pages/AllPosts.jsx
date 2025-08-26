import React,{useState,useEffect} from 'react'
import {PostCard,Container} from "../components/index"
import service from '../appwrite/Config'
function AllPosts() {

    const [post,setPosts] = useState([])
    useEffect(()=>{
     service.getPosts([]).then((res)=>setPosts(res))
    },[])
  return (
    <Container>
        {post.map((post)=>
            (
                <div key={post.$id}>
                    <PostCard post={post}/>
                </div>
            )
            )}
    </Container>
  )
}

export default AllPosts