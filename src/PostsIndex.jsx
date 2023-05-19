export function PostsIndex(props) {
  return (
    <div id="posts-index">
    
        <br />
        <h3>Vessel Log and Schematics - SDS</h3>
      
      <br />
      <div className="card-container">
        {props.posts.map(post => (
          <div key={post.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <img src={post.image} alt={post.title} />
              <p><br />
                <button
                  className="btn btn-primary custom-info-button"
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

