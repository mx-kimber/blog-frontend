function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#recipes-index">All posts</a> | <a href="#recipes-new">New post</a>
    </header>
  )
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New recipe</h1>
      <form>          
        <div>
          <p>Title: <input type="text" /></p>
        </div>
        <div>
          <p>Body: <input type="text" /></p>
        </div>
        <div>
          <p>Image: <input type="text" /></p>
        </div>
        <button type="submit">Create New Blog</button>
      </form>
    </div>
  )
}

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All blogs</h1>
      <div className="posts">
        <h2>Captain's Log</h2>
        <img src="https://i.imgur.com/Ue42Eeq.png" alt="" />
        <p>Author: Kimber Ogden</p>
        <button>More info</button>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2022</p>
    </footer>
  )
}

function Content() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
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