import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";
import BlogCard from "../../components/StaffPortal/BlogCard";
import ManageCard from "../../components/StaffPortal/ManageCard";
import CreateCard from "../../components/StaffPortal/CreateCard";
import VeteranCard from "../../components/StaffPortal/VeteranCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const AdminIndex = () => {
  return (
    <Layout>
      <div style={{ overflow: "hidden" }}>
        <Admin>
          <section
            className="container-fluid memberLanding ml-0 pl-0"
            style={{ overflow: "hidden" }}
          >
            <div
              className="row"
              style={{
                backgroundColor: "rgba(0,0,0,0.75)",
                overflow: "hidden",
              }}
            >
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
              <div className="col-md-3">
                <a href="/admin/update">
                  <p
                    style={{
                      color: "white",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                    }}
                  >
                    <span>
                      <FontAwesomeIcon icon={faUser} />
                    </span>{" "}
                    Update Profile
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
                  STAFF DASHBOARD
                </h2>
              </div>
            </div>

            <div className="row staff-portal-row text-center justify-content-center">
              <div className="col-md-3 staff-portal-cols mb-3">
                <ManageCard />
              </div>

              <div className="col-md-3 staff-portal-cols mb-3">
                <BlogCard />
              </div>

              <div className="col-md-3 staff-portal-cols mb-3">
                <VeteranCard />
              </div>
            </div>
          </section>
        </Admin>
      </div>
    </Layout>
  );
};

export default AdminIndex;
