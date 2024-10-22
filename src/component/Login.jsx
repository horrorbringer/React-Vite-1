import '../App.css';
import { Footer } from './Footer';
const Login = () => {
  return (
    <>
      <article className="card-login">
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <div className="list-input">
          <input type="text" name="" id="" placeholder="Username" />
          <input type="password" name="" id="" placeholder="Password" />
        </div>
        <p className='forget-pw'><a href="#">Forgetpassword</a></p>
        <div style={{ textAlign: "center" }}>
          <button type="button">Login</button>
        </div>
        <p className='log-regis'>
          Dont have an account <a href='#'> Register</a>
        </p>
      </article>
      <Footer/>
    </>
  );
};
export default Login;
