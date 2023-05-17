export function PostsShow(props) {
    console.log(props.post)
    return (
      <div>
        <p>{props.post.title}</p>
        <p>{props.post.body}</p>
        {/* <p>{props.post.image}</p> */}
        
        <form>
          <input type="text" /><br />
          <p><button type="input">Update Info</button></p>
        </form>
      </div>
    )
  }