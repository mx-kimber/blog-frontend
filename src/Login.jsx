export function Login() {
return (
    <div id="Login">
        <h1>Login</h1>
        <form action="http://localhost:3000/sessions.json" method="POST">
        <p><b>Email:</b><br/> <input name ="email" type="text" /></p>
        <p><b>Password:</b><br/><input name="password" type="password" /></p>
        <button type="submit">Login</button>
        </form>
    </div>
    );
}