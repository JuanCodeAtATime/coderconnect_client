import { useState, useEffect } from "react";
import { signup, isAuth } from "../../actions/auth";
import Router from "next/router";
import Link from "next/link";

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;

  useEffect(() => {
    isAuth() && Router.push("/");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    signup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          loading: false,
          message: data.message,
          showForm: false,
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

  const signupForm = () => {
    return (
      <div className="auth-box ">
        <a href="/">
          <img
            src={"../static/images/cclogo.png"}
            width="55px"
            style={{ borderRadius: 2 }}
          ></img>
        </a>
        <h3 style={{ color: "rgb(66, 139, 202)" }}>Become a Member</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              value={name}
              onChange={handleChange("name")}
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
          </div>

          <div className="form-group">
            <input
              value={email}
              onChange={handleChange("email")}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <input
              value={password}
              onChange={handleChange("password")}
              type="password"
              className="form-control"
              placeholder="Create password"
            />
          </div>

          <div>
            <button className="btn btn-dark btn-md">Sign-up</button>
          </div>
          <span style={{ fontSize: ".75rem" }}>
            {!isAuth() && <Link href="/signin">or Sign-in</Link>}
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
      {showForm && signupForm()}
    </React.Fragment>
  );
};

export default SignupComponent;
