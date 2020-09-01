import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import UserBlogCards from "../../components/UserPortal/UserBlogCards";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const UserIndex = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <Private>
          <div className="container-fluid memberLanding ml-0 pl-0">
            {/* <div
              className="row"
              style={{
                backgroundColor: "rgba(0,0,0,0.75)",
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
              </div> */}
            {/* <div className="col-md-3">
                <a href="/user/update">
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
            </div> */}
            <div
              className="row"
              style={{
                height: "180px",
                paddingTop: "30px",
                paddingLeft: "20px",
                marginBottom: 20,
              }}
            >
              <div
                className="col-md-5 col-sm-12 col-xs-12"
                style={{ marginTop: 80 }}
              >
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
              <div className="col-md-3 col-sm-12 col-xs-12"></div>
            </div>

            <div className="row text-center justify-content-center mt-4">
              {/* <div className="col-md-3 staff-portal-cols mb-3">
              <ManageCard />
            </div> */}

              <div className="col-md-3 mb-3"></div>

              {/* <div className="col-md-3 staff-portal-cols mb-3">
              <VeteranCard />
            </div> */}
            </div>
          </div>
        </Private>
      </Layout>
    </div>
  );
};

export default UserIndex;
