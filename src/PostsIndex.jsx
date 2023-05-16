export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All blogs</h1>
      <div className="row">
        {props.posts.map(post => (
          <div key={post.id} className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.ingredients}</p>
                <img src={post.image} />
                <p>
                  <button className="btn btn-primary" onClick={() => {props.onShowPost(post)}}>
                    More info
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

