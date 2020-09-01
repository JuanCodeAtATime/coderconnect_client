import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import VeteranList from "../../components/partners-veterans/VeteranATSList";

const VeteranATS = () => {
  return (
    <React.Fragment>
      <Layout>
        <Admin>
          <section className="staffPage ml-0 pl-0">
            <div className="row">
              <div className="col-md-3">
                <a href="/admin">
                  <p
                    style={{
                      color: "white",
                      paddingLeft: "60px",
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
            <div
              className="row"
              style={{
                height: "180px",
                paddingTop: "30px",
                paddingLeft: "60px",
              }}
            >
              <div className="col-md-5">
                <h2 className="landing-cta about-header" id="landing-cta">
                  VETERANS ATS
                </h2>
              </div>
            </div>

            <div className="row staff-portal-row justify-content-center">
              <VeteranList />
            </div>
          </section>
        </Admin>
      </Layout>
    </React.Fragment>
  );
};

export default VeteranATS;
