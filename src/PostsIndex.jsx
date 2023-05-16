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
                <img src={post.image_url || "https://media.npr.org/assets/img/2022/11/23/russian-toy-2-002--059b8a825dac13f92234d65777e6b29b0914e92f-s1100-c50.jpg"} />
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

