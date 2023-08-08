import { Outlet, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <section>
        <NavBar />   
      </section>
      <Outlet />
      <section>
        <Footer />
        </section>

    </>
  );
};


export default Layout;