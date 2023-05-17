import axios from "axios"

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    axios.patch(" ", params).then(response.data);
  }
  
    console.log(props.post)
    return (
      <div>
        <p>id:{props.post.id}</p>
        <p>{props.post.title}</p>
        <p>{props.post.body}</p>
        {/* <p>{props.post.image}</p> */}
        
        <form>
          <p>Title:<br/><input name="title" type="text" /></p>
          <p>Body:<br/><input name="body" type="text" /></p>
          <p>Image:<br/><input name="image" type="text" /></p>

          <button type="input">Update Info</button>
        </form>
      </div>
    )
  }