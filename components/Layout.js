import Header from "./Header";
import Footer2 from "./Footer2";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      {/* <Footer2 /> */}
    </React.Fragment>
  );
};

export default Layout;
