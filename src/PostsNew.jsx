export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handling Submit');
    const params = new FormData(event.target);
    props.onCreatePost(params)

    event.target.reset()
}

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <p>Title:<br/><input name="title" type="text" /></p>
        <p>Body:<br/><input name="body" type="text" /></p>
        <p>Image:<br/> <input name="image" type="text" /></p>
        <button type="submit">Create Blog Post</button>
      </form>
    </div>
  );
}
