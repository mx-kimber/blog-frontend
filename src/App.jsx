import { useState } from "react";

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
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Captain's (b)Log",
      body: "This is my first (b)Log!",
      image: "https://i.imgur.com/Ue42Eeq.png"
    }
  ])

  return (
    <div>
      <PostsNew />
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