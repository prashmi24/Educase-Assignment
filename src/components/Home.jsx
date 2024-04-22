import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="wrapper home">
      <div className="heading">
        <h1>Welcome to PopX</h1>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <div className="btn-1">
        <Link to="/register">
          <button>Create Account</button>
        </Link>
      </div>
      <div className="btn-2">
        <Link to="/login">
          <button>Already Registered? Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
