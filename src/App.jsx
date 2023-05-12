function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

      <div id="posts-new">
        <h1>New post</h1>
        <form>
          <div>
            <p>Title: <input type="text" /></p>
            <p>Body: <input type="text" /></p>
            <p>Image: <input type="text"/></p>
          </div>
          <button type="submit">Create post</button>
        </form>
      </div>

      <div id="posts-index">
        <h1>All posts</h1>
        <div className="posts">
          <h2>Captains Blog</h2>
          <img src="https://i.imgur.com/Ue42Eeq.png" alt="" />
          <p>Author: Kimber Ogden</p>
          <button>More info</button>
        </div>
        
      </div>

      <footer>
        <p>Copyright 2022</p>
      </footer>
    </div>
  );
}

export default App;