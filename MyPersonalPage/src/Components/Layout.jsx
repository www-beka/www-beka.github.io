import { Outlet, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      {/* <section>
                <NavBar />   
            </section>
            <section>
                <Footer />
            </section> */}
        
      <Outlet />
    </>
  );
};


export default Layout;