import { useState, useEffect } from "react";
import { signin, authenticate, isAuth } from "../../actions/auth";
import Router from "next/router";
import Link from "next/link";

const SigninComponent = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { email, password, error, loading, message, showForm } = values;

  useEffect(() => {
    isAuth() && Router.push("/");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        //save user token to cookie
        //save user infor to localstorage
        //authenticate user
        authenticate(data, () => {
          if (isAuth && isAuth().role === 1) {
            Router.push("/admin");
          } else {
            Router.push("/");
          }
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const signinForm = () => {
    return (
      <div className="auth-box mt-3">
        <a href="/">
          <img
            src={"../static/images/cclogo.png"}
            width="55px"
            style={{ borderRadius: 2 }}
          ></img>
        </a>
        <h3 style={{ color: "rgb(66, 139, 202)" }}>MEMBER LOGIN</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              value={email}
              onChange={handleChange("email")}
              type="email"
              className="form-control"
              placeholder="Type your email"
            />
          </div>

          <div className="form-group">
            <input
              value={password}
              onChange={handleChange("password")}
              type="password"
              className="form-control"
              placeholder="Type your password"
            />
          </div>

          <div>
            <button className="btn btn-dark btn-md">Sign-in</button>
          </div>
          <span style={{ fontSize: ".75rem" }}>
            {!isAuth() && <Link href="/signup">or Create Account</Link>}
          </span>
        </form>
      </div>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signinForm()}
    </React.Fragment>
  );
};

export default SigninComponent;
