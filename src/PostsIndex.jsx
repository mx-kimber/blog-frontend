export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <p>
        <h1>Captain's (b)Logs</h1>
        <h3>Ship Data</h3>
      </p>
      <div>
        <input type="button" value="Federation" />
        <input type="button" value="Klingon" />
        <input type="button" value="Borg" />
        <input type="button" value="Alternate Timeline" />
      </div>
      <br />
      <div className="card-container">
        {props.posts.map(post => (
          <div key={post.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <img src={post.image} alt={post.title} />
              <p><br />
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    props.onShowPost(post);
                  }}
                >
                  More info
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
