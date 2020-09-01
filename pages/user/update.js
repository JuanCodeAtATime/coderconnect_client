import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import Link from "next/link";
import ProfileUpdate from "../../components/auth/ProfileUpdate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const AdminUpdate = () => {
  return (
    <Layout>
      <Private>
        <section className="staffPage ml-0 pl-0">
          <div className="row" style={{ backgroundColor: "rgba(0,0,0,0.75)" }}>
            <div className="col-md-3">
              <a href="/">
                <p
                  style={{
                    color: "white",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <span>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                  </span>{" "}
                  Back Home
                </p>
              </a>
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{
              height: "180px",
              paddingTop: 20,
              backgroundColor: "rgba(0,0,0,0.65)",
            }}
          >
            <div className="col-md-12 text-center">
              <h2
                className="landing-cta about-header"
                style={{ fontSize: "3.5rem" }}
                id="landing-cta"
              >
                Update Profile
              </h2>
            </div>
          </div>

          <div className="row staff-portal-row text-center justify-content-center">
            <ProfileUpdate />
          </div>
        </section>
      </Private>
    </Layout>
  );
};

export default AdminUpdate;
