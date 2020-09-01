import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import BlogCreate from "../../components/crud/BlogCreate";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      <Private>
        <div className="container-fluid memberLanding">
          <div className="row">
            <div className="col-md-12" style={{ marginTop: "100px" }}>
              <BlogCreate />
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default Blog;
