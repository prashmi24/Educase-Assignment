import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="wrapper login">
      <h1>
        Signin to your <br /> PopX account
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <form>
        <div class="forminput">
          <label for="input" class="text">
            Email Address
          </label>
          <input
            type="text"
            placeholder="Enter email address"
            name="input"
            class="input"
          />
        </div>

        <div class="forminput">
          <label for="input" class="text">
            Password
          </label>
          <input
            type="text"
            placeholder="Enter password"
            name="input"
            class="input"
          />
        </div>
      </form>
      <div className="btn-3">
        <Link to="/settings">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
