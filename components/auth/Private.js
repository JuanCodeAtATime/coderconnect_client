import { useEffect } from "react";
import Router from "next/router";
import { isAuth } from "../../actions/auth";
// import Footer2 from "../../components/Footer2";

const Private = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push("/signin");
    }
  }, []);
  return (
    <React.Fragment>
      {children}

      {/* <Footer2 /> */}
    </React.Fragment>
  );
};

export default Private;
