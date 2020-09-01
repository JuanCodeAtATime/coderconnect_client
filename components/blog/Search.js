import Link from "next/link";
import renderHTML from "react-render-html";
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/blog";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: "",
  });
  const { search, results, searched, message } = values;

  const searchSubmit = (e) => {
    e.preventDefault();
    listSearch({ search }).then((data) => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} Article(s) found`,
      });
    });
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: [],
    });
  };
  const searchedBlogs = (results = []) => {
    return (
      <div
        className="jumbotron bg-white"
        style={{
          color: "black",
          marginTop: 30,
          height: "auto",
          marginBottom: 30,
          overflow: "hidden",
        }}
      >
        {message && (
          <p className="text-muted font-italic mt-3" style={{ paddingTop: 15 }}>
            {message}
          </p>
        )}

        {results.map((blog, i) => {
          return (
            <div key={i} style={{ overflow: "hidden" }}>
              <Link href={`/coderconnect-forum/${blog.slug}`}>
                <ul>
                  <li>
                    {" "}
                    <a className="text-primary" style={{ cursor: "pointer" }}>
                      {blog.title}
                    </a>
                  </li>
                </ul>
              </Link>
              <hr />
            </div>
          );
        })}
      </div>
    );
  };
  const searchForm = () => (
    <div style={{ overflow: "hidden" }}>
      <form
        onSubmit={searchSubmit}
        style={{
          paddingTop: 50,
          paddingBottom: 0,
          backgroundColor: "transparent",
          position: "absolute",
          width: "100%",
          zIndex: 3,
        }}
      >
        <div
          className="row justify-content-center mb-1"
          style={{
            textAlign: "right",
            justifyContent: "end",
            // position: "relative",
          }}
        >
          <div className="col-md-5 m-1">
            <input
              type="search"
              style={{
                backgroundColor: "#383838",
                color: "white",
                border: "solid #0275d8 1px",
                // position: "absolute",
              }}
              className="form-control search-form"
              placeholder="searchCoderConnect"
              onChange={handleChange}
            ></input>
          </div>

          <div className="col-md-2 m-1">
            <button
              className="btn btn-block btn-md btn-primary"
              type="submit"
              style={{
                marginBottom: 3,
                // position: "absolute",
              }}
            >
              <b>Search</b>
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <div style={{ overflow: "hidden" }}>
      <div>{searchForm()}</div>
      {searched && <div>{searchedBlogs(results)} </div>}
    </div>
  );
};

export default Search;
