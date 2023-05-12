import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  
  const handleIndexPosts = () => {
    console.log('in handle index posts');
 
    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data);
      // posts = response.data
      setPosts(response.data);

    });
  };

  useEffect(handleIndexPosts, []);
  
  const handleShowPost = (myPost) => {
    setIsPostsShowVisible(true); 
    setCurrentPost(myPost)
}

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };
  return (
    <div>
      <PostsNew />
      <br />
      <br />
      <br />
      <button onClick={handleIndexPosts}>Get data</button>
      <PostsIndex posts={posts} onShowPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost}/>
      </Modal>
    </div>

  );
}
