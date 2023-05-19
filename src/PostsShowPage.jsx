import { useState, useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom"

export function PostsShowPage() {
  const [post, setPost] = useState({})
  const params = useParams();
  const getShowPost = () => {
    console.log(params.id);
    console.log('getting individual post');

    axios.get(`http://localhost:3000/posts/${params.id}.json`).then(response => {
      console.log(response.data)
      setPost(response.data)
    })
  }  

  useEffect(getShowPost, [])
  return (
    <div>
      <p>id: {post.id}</p>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
      <p>image: {post.image}</p>   
    </div>
  )
}