import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import BlogUpdate from "../../components/crud/BlogUpdate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row mb-4 mt-2">
            <div className="col-md-3">
              <a href="/admin">
                <p
                  style={{
                    color: "black",
                    paddingLeft: "10px",
                    paddingTop: "100px",
                  }}
                >
                  <span>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                  </span>{" "}
                  Back to Dashboard
                </p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pb-5 pl-4 mr-3">
              <h2 style={{ color: "#8d54b5" }}>Update/Edit Article</h2>
            </div>
            <div className="col-md-12">
              <BlogUpdate />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
