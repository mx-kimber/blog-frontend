import axios from "axios"
export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);

    console.log('handling submit');
  }
  console.log(props.post)
    return (
      <div>
        <p>{props.post.id}</p>
        <p><b>{props.post.title}</b></p>
        <img src={props.post.image} style={{ width: '200px', height: '100px' }} alt={props.post.title} />
        <br />
        <br />
        <p>{props.post.body}</p>
        <br />
        <form onSubmit={handleSubmit}>
          <p>Title:<br/><input name="title" type="text" defaultValue={props.post.title} /></p>
          <p>Body:<br/><input name="body" type="text" defaultValue={props.post.body}/></p>
          
          <p>Image:<br/><input name="image" type="text" defaultValue={props.post.image} /></p>
          <button type="input">Update Info</button>
        </form>
      </div>
    )
  }