import axios from "axios"
export function Signup() {
    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault()
        const params = new FormData(event.target)
        axios.post("http://localhost:3000/users.json", params).then(response => {
          console.log(response.data);
          event.target.reset();
        }).catch(error => {
          console.log(error.response.data)
        })
        console.log('handling submit');
      }
    return (
      <div id="signup">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <p><b>Name:</b> <br/><input name ="name" type="text" /></p>
          <p><b>Email:</b><br/> <input name ="email" type="text" /></p>
          <p><b>Password:</b><br/><input name="password" type="password" /></p>
          <p><b>Password confirmation:</b><br/> <input name = "password_confirmation" type="password" /></p>
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }