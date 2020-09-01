import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import Link from "next/link";
import BlogRead from "../../components/crud/BlogRead";

const Blog = () => {
  return (
    <Layout>
      <Private>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5 mt-4 pl-4">
              <h2 style={{ marginTop: 50, marginBottom: 0, color: "#8d54b5" }}>
                Manage Media
              </h2>
              <p>
                <em>Edit or delete past articles</em>
              </p>
            </div>
            <div className="col-md-12">
              <BlogRead />
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default Blog;
