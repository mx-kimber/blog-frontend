export function PostsIndex(props) {
  
  return (
    <div id="posts-index">
      <p>
        <br />
        <h3>Starship Data and Schematics - SDS</h3>
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
