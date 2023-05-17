import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  
  const handleIndexPosts = () => {
    console.log('in handle index posts');
 
    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data);
     
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

  const handleCreatePost = (params) => {
    axios.post('http://localhost:3000/posts.json', params).then(response => {
      console.log(response.data);
      // take everything that's in recipes and add response.data
      setPosts([...posts, response.data])
    })
    console.log('handling create recipe')
  }

  return (
    <div className="container">
      <div>
        <PostsIndex posts={posts} onShowPost={handleShowPost}/>
        <Modal show={isPostsShowVisible} onClose={handleClose}>
          <PostsShow post={currentPost}/>
        </Modal>
        <br />
        <Signup />  
        <br />
        <Login />
        <button><LogoutLink /></button>
        <PostsNew onCreatePost={handleCreatePost} />
        <br />       
      </div>
    </div>
  );
}
