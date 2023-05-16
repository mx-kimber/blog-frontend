export function PostsShow(props) {
    console.log(props.post)
    return (
      <div>
        <p>{props.post.title}</p>
        <p>{props.post.body}</p>
        {/* <p>{props.post.image}</p> */}
        
      </div>
    )
  }