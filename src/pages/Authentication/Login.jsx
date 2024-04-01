import { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="container-fluid bg-info vh-100 d-flex justify-content-center align-items-center">
        <div className="card shadow" style={{ maxWidth: "400px", width: "90%" }}>
          <div className="card-body text-center">
            <img src="login.png" alt="login" style={{ width: "70%" }} />
            <h3 className="card-title">Log In</h3>
            <form className="text-start">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 text-end">
                <a href="#" style={{ textDecoration: "none" }}>Lupa password?</a>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
