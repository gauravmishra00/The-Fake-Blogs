import React,{useState,useEffect} from 'react'
import service from '../appwrite/Config'
import {PostForm,Container} from "../components/index"
import {useNavigate,useParams} from "react-router-dom"

function EditPost() {
    const [post,setPosts] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()
    useEffect(()=>{
        service.getPost().then((post)=>{
            if(post){
                setPosts(post)
            }
            else{
                navigate("/")
            }
        })
    },[slug,navigate])
  return post?(
    <Container>
        <PostForm post={post}/>
    </Container>
  ):null
}

export default EditPost