import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import { createBlog } from "../../actions/blog";
import { withRouter } from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { getCategories } from "../../actions/category";
import { getTags } from "../../actions/tags";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../node_modules/react-quill/dist/quill.snow.css";
import { QuillModules, QuillFormats } from "../../helpers/quill";

const CreateBlog = ({ router }) => {
  const blogFromLS = () => {
    if (typeof window === "undefined") {
      return false;
    }

    if (localStorage.getItem("blog")) {
      return JSON.parse(localStorage.getItem("blog"));
    } else {
      return false;
    }
  };

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [checked, setChecked] = useState([]); //categories
  const [checkedTag, setCheckedTag] = useState([]); //tags

  const [body, setBody] = useState(blogFromLS());
  const [values, setValues] = useState({
    error: "",
    sizeError: "",
    success: "",
    formData: "",
    title: "",
    hidePublishButton: false,
    loading: false,
  });

  const {
    error,
    sizeError,
    success,
    formData,
    title,
    hidePublishButton,
    loading,
  } = values;

  const token = getCookie("token");

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initCategories();
    initTags();
  }, [router]);

  const initCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };

  const initTags = () => {
    getTags().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setTags(data);
      }
    });
  };

  // Publish Blog Function
  const publishBlog = (e) => {
    setValues({ ...values, loading: true });
    e.preventDefault();
    // console.log("ready to publish");

    createBlog(formData, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          loading: false,
          title: "",
          error: "",
          success: `Congrats!  Your blog, "${data.title}" has been successfuly created.`,
        });
        setBody("");
        setCategories([]);
        setTags([]);
      }
    });
  };

  const handleChange = (name) => (e) => {
    console.log(e.target.value);
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };

  const handleBody = (e) => {
    // console.log(e);
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("blog", JSON.stringify(e));
    }
  };

  const handleToggle = (c) => () => {
    setValues({ ...values, error: "error" });

    const clickedCategory = checked.indexOf(c);
    const all = [...checked];

    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
    console.log(all);
    setChecked(all);
    formData.set("categories", all);
  };

  const handleTagsToggle = (t) => () => {
    setValues({ ...values, error: "error" });

    const clickedTag = checkedTag.indexOf(t);
    const all = [...checkedTag];

    if (clickedTag === -1) {
      all.push(t);
    } else {
      all.splice(clickedTag, 1);
    }
    console.log(all);
    setCheckedTag(all);
    formData.set("tags", all);
  };

  const showCategories = () => {
    return (
      categories &&
      categories.map((c, i) => (
        <li key={i} className="list-unstyled">
          <input
            onChange={handleToggle(c._id)}
            type="checkbox"
            className="mr-2"
          />
          <label className="form-check-label">{c.name}</label>
        </li>
      ))
    );
  };

  const showTags = () => {
    return (
      tags &&
      tags.map((t, i) => (
        <li key={i} className="list-unstyled">
          <input
            onChange={handleTagsToggle(t._id)}
            type="checkbox"
            className="mr-2"
          />
          <label className="form-check-label">{t.name}</label>
        </li>
      ))
    );
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{
        zIndex: "3",
        position: "absolute",
        display: error ? "" : "none",
      }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-success"
      style={{
        zIndex: "3",
        position: "absolute",
        display: success ? "" : "none",
      }}
    >
      {success}
    </div>
  );

  const showLoading = () => (
    <div
      className="alert alert-info"
      style={{
        zIndex: "3",
        position: "absolute",
        display: loading ? "" : "none",
      }}
    >
      Loading...
    </div>
  );

  const createBlogForm = () => {
    return (
      <form onSubmit={publishBlog}>
        <div className="form-group">
          <h4 style={{ textAlign: "center" }}>
            <em>What's Your Question?</em>
          </h4>

          <input
            type="text"
            className="form-control"
            value={title}
            onChange={handleChange("title")}
          />
        </div>

        <div className="form-group text-white">
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            variant="light"
            style={{ color: "white" }}
            placeholder="The tech community wants to help!  The more info you proivde, the better."
            onChange={handleBody}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-warning mb-3">
            <b>ASK</b>
          </button>
        </div>
      </form>
    );
  };
  return (
    <div className="container-fluid pb-2 text-white" style={{ marginTop: 50 }}>
      <div className="row pt-3" style={{ backgroundColor: "rgba(0,0,0,60%" }}>
        <div className="col-md-8">{createBlogForm()}</div>

        <div className="pt-3">
          {showError()}
          {showSuccess()}
          {showLoading()}
        </div>
        <div className="col-md-4 text-white">
          <div>
            <h5>Categories</h5>
            <hr style={{ backgroundColor: "white" }} />
            <ul
              style={{
                maxHeight: "200px",
                overflowY: "scroll",
                color: "white",
              }}
            >
              {showCategories()}
            </ul>
          </div>

          <div>
            <h5>Tags</h5>
            <hr style={{ backgroundColor: "white" }} />
            <ul
              style={{
                maxHeight: "200px",
                overflowY: "scroll",
                color: "white",
              }}
            >
              {showTags()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreateBlog);
