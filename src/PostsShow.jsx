import axios from "axios"

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then(response => {
      console.log(response.data);
    })

    console.log('handling submit');
  }
  console.log(props.post)
    return (
      <div>
        <p>{props.post.id}</p>
        <p>{props.post.title}</p>
        <p>{props.post.body}</p>
        <img src={props.post.image} style={{ width: '300px', height: '200px' }} alt={props.post.title} />
        
        <form onSubmit={handleSubmit}>
          <p>Title:<br/><input name="title" type="text" defaultValue={props.post.title} /></p>

          <p>Body:<br/><input name="body" type="text" defaultValue={props.post.body}/></p>
          
          <p>Image:<br/><input name="image" type="text" defaultValue={props.post.image} /></p>

          <button type="input">Update Info</button>
        </form>
      </div>
    )
  }