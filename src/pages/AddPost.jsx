import React from 'react'
import {PostForm , Container} from "../components/index"
import authService from '../appwrite/Auth'
function AddPost() {
  return (
    <Container>
        <div>
            <PostForm/>
        </div>
    </Container>
  )
}

export default AddPost