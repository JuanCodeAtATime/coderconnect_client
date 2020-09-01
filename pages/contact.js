import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/form/ContactForm";

const Contact = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <section
          className="container-fluid mt-4"
          style={{ backgroundColor: "#383838" }}
        >
          {" "}
          <div
            className="row"
            style={{
              paddingBottom: 0,
              marginBottom: 0,
            }}
          >
            <a href="/" style={{ color: "white" }}>
              <p
                style={{
                  color: "#white",
                  paddingLeft: "10px",
                  paddingTop: "20px",
                  paddingBottom: 0,
                  marginBottom: 0,
                }}
              >
                <small>
                  <span>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                  </span>{" "}
                  Back Home
                </small>
              </p>
            </a>
          </div>
          <div
            className="row text-center justify-content-center"
            style={{ backgroundColor: "#383838", paddingTop: 25 }}
          >
            <div className="col-md-3 mt-3 mb-2">
              <h2 className="program" style={{ color: "white" }}>
                <b>CONTACT US</b>
              </h2>
            </div>
          </div>
          <div
            className="row text-center justify-content-center"
            style={{ paddingBottom: 40 }}
          >
            <div className="col-md-8 mt-3 mb-2">
              {" "}
              <ContactForm />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Contact;
