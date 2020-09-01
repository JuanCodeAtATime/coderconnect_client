import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { singleBlog, listRelated } from "../../actions/blog";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";
import SmallCard from "../../components/blog/SmallCard";
import DisqusThread from "../../components/DisqusThreads";

const SingleBlog = ({ blog, query }) => {
  const [related, setRelated] = useState([]);

  const loadRelated = () => {
    listRelated({ blog }).then((data) => {
      //Need if statement to handle response for No related articles.
      //Otherwise, client side will throw error
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
      }
    });
  };

  useEffect(() => {
    loadRelated();
  }, []);

  const head = () => (
    <Head>
      <title>
        {" "}
        {blog.title} | {APP_NAME}{" "}
      </title>
      <meta name="description" content={blog.mdesc} />

      <link
        rel="cannonical"
        href={`${DOMAIN}/coderconnect-forum/${query.slug}`}
      />
      <meta property="og:title" content={`${blog.title} | ${APP_NAME}`} />

      <meta property="og:description" content={blog.mdesc} />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${DOMAIN}/coderconnect-forum/${query.slug}`}
      />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
      <meta
        property="og:image:secure_url"
        content={`${API}/blog/photo/${blog.slug}`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a
          className="mr-1 mt-3"
          style={{
            backgroundColor: "#383838",
            color: "white",
            padding: 5,
            width: 50,
          }}
        >
          {c.name}
        </a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-warning btn-sm mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));

  const showRelatedBlog = () => {
    return related.map((blog, i) => (
      <div className="col-md-4" key={i}>
        <article>
          <SmallCard blog={blog} />
        </article>
      </div>
    ));
  };

  const showComments = () => {
    return (
      <div>
        <DisqusThread
          id={blog.id}
          title={blog.title}
          path={`/blog/${blog.slug}`}
        />
      </div>
    );
  };

  return (
    <React.Fragment>
      {head()}
      <div style={{ overflow: "hidden" }}>
        <Layout>
          <main
            style={{
              minHeight: "500px",
              borderTop: "solid rgba(141, 84, 181, 0.85) 1.8px",
            }}
          >
            <article style={{ marginTop: "18px" }}>
              <div className="container-fluid">
                <section className="container">
                  <div className="row text-center">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <h2 className="pb-1 mb-0 pt-3 font-weight-bold text-center">
                        {blog.title}
                      </h2>
                      <br />
                      <img
                        src={`${API}/blog/photo/${blog.slug}`}
                        alt={blog.title}
                        className="img img-thumbnail"
                        width="95%"
                      />
                    </div>
                  </div>
                </section>

                <section>
                  <div className="container">
                    <p className="lead mt-3 mark pt-1 pb-1">
                      {showBlogCategories(blog)}
                      Written by{" "}
                      <Link
                        href={`/profile/${blog.postedBy.username}`}
                        prefetch={false}
                      >
                        <a>
                          {""}
                          {blog.postedBy.username}
                        </a>
                      </Link>
                      | Published {moment(blog.updatedAt).fromNow()}
                    </p>
                    <div className="pb-3">
                      {showBlogTags(blog)}
                      <br></br>
                    </div>
                  </div>
                </section>
              </div>

              <div className="container">
                <section>
                  <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
                </section>
              </div>

              <div className="container pb-5">
                <h4 className="text-center pt-1 mt-0 pb-5 h2">Related blogs</h4>
                <div className="row">{showRelatedBlog()}</div>
              </div>

              <div className="container pb-5">{showComments()}</div>
            </article>
          </main>
        </Layout>
      </div>
    </React.Fragment>
  );
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { blog: data, query };
    }
  });
};

export default SingleBlog;
