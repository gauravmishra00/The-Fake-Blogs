import React, { useCallback, useEffect, useState } from 'react'
import { Button, Input, RTE, Select } from '../../components/index'
// import authService from '../../appwrite/Auth'
import service from '../../appwrite/Config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
function PostForm({ post }) {

  // 
  const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || ""
    }
  })
  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)
  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? service.uploadFile(data.image[0]) : null
      if (file) {
        service.deleteFile(post.featuredImage)
      }
      const dbPost = await service.updatePost(
        post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined
      }
      )
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }
      else {
        const file = await service.uploadFile(
          data.image[0]
        )
        if (file) {
          const fileId = file.$id
          data.featuredImage = fileId
          const dbPost = await service.createPost(
            {
              ...data,
              userId: userData.$id
            }
          )
          if (dbPost) {
            navigate(`/post/${dbPost.$id}`)
          }
        }
      }
    }
  }
    const slugTransform = useCallback((value)=>
    {
      if(value && typeof(value)==="string")      
        return value
        .trim()
        .toLocaleLowerCase()
        .replace(/^[a-zA-Z/d]/g,'-')
      
      return ''
    },[])
  
  useEffect(()=>{
    const subscription = watch((value,{name})=>
    {
      if(name === 'title')
      {
        setValue('slug',slugTransform(value.title,{shouldValidate:true}))
      }
    })
    return subscription.unsubscribe()
  }
  ,[watch,setValue,slugTransform])


  return (
    <div>PostForm</div>
  )
}

export default PostForm