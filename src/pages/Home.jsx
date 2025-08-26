import React,{useState,useEffect} from 'react'
import service from '../appwrite/Config'
import {Container,PostCard} from "../components/index"
function Home() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        service.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
    },[])
    
  if(posts.length===0)
  {
    return(
        <div>
            <Container>
                <h1>Login to read Posts</h1>
            </Container>
        </div>
    )
  }
  return(
    <div>
        <Container>
            <div>
                {posts.map((post)=>(
                    <div key={post.$id}>
                        {/* in post i have spread it */}
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Home