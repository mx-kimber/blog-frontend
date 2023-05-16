export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <p>Title:<br/><input type="text" /></p>
        <p>Body:<br/><input type="text" /></p>
        <p>Image:<br/> <input type="text" /></p>
        <button type="submit">Create Blog Post</button>
      </form>
    </div>
  );
}
