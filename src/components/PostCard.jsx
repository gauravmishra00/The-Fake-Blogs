import React from 'react'
import service from '../appwrite/Config'
import { Link } from 'react-router-dom'

function PostCard({$id , title , featuredImg}) {
  return (
    <Link to={`/post/${$id}`}>
      {/* Tailwind css on postcard */}
      <div border rounded-lg overflow-hidden shadow hover:shadow-lg transition>
        <div w-full h-48 overflow-hidden>
            <img src={service.getFilePreview(featuredImg)} alt={title} />
        </div>
        <h2>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard