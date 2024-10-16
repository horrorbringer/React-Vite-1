import '../App.css';
const Login = () => {
  return (
    <>
      <article className="card-login">
        <h2>Login</h2>
        <div className="list-input">
          <input type="text" name="" id="" placeholder="Username" />
          <input type="password" name="" id="" placeholder="Password" />
        </div>
        <p>Forgetpassword</p>
        <button type="button">Login</button>
        <p>
          Dont have an account<span>Register</span>
        </p>
      </article>
    </>
  );
};
export default Login;
