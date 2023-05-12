export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All blogs</h1>
      {props.posts.map(post => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} alt="" />
          <button onClick={() => props.onShowPost(post)}>More info</button>
        </div>
      ))}
    </div>
  );
}
