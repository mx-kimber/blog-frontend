import { useState, useEffect } from "react";
import axios from "axios";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  )
}


function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>          
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <button type="submit">Create Blog Post</button>
      </form>
    </div>
  )
}

function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All blogs</h1>
      {props.posts.map(post => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} alt="" />
          <button>More info</button>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2022</p>
    </footer>
  )
}

function Content() {
  const [posts, setPosts] = useState([])

  const handleIndexPosts = () => {
    console.log('in handle index posts')
    // make my web request to api
    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data);
      // posts = response.data
      setPosts(response.data);

    })
  }
  useEffect(handleIndexPosts, [])
  return (
    <div>
      <PostsNew />
      <br />
      <br />
      <br />
      <button onClick={handleIndexPosts}>Get data</button>
      <PostsIndex posts={posts}/>
    </div>

  )
}

function App() {
  return (
    <div>
      <Header />
      <Content />   
      <Footer />   
    </div>
  );
}

export default App;