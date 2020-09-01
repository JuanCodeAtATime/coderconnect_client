import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { singleTag } from "../../actions/tags";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import Card from "../../components/blog/Card";

const Tag = ({ tag, blogs, query }) => {
  const head = () => (
    <Head>
      <title>
        {" "}
        {tag.name} | {APP_NAME}{" "}
      </title>
      <meta name="description" content={`CoderConnect ${tag.name}`} />

      <link rel="cannonical" href={`${DOMAIN}/tags/${query.slug}`} />
      <meta property="og:title" content={`${tag.name} | ${APP_NAME}`} />

      <meta property="og:description" content={`CoderConnect ${tag.name}`} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/cclogo.png`}
      />

      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/cclogo.png`}
      />

      <meta property="og:image:type" content="image/png" />

      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className="container-fluid">
            <header>
              <div className="col-md-12 pt-3" style={{ marginTop: 20 }}>
                <h2 className="btn btn-warning" style={{ marginBottom: 40 }}>
                  {tag.name}
                </h2>
                {blogs.map((b, i) => (
                  <div>
                    <Card key={i} blog={b} />
                    <hr />
                  </div>
                ))}

                <div></div>
              </div>
            </header>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Tag.getInitialProps = ({ query }) => {
  return singleTag(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { tag: data.tag, blogs: data.blogs, query };
    }
  });
};

export default Tag;
