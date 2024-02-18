import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Bekzod Dev
        </motion.span>
        <div className="social">
          <a href="">
            <img src="" alt="inst" />
          </a>
          <a href="">
            <img src="" alt="tg" />
          </a>
          <a href="">
            <img src="" alt="github" />
          </a>
          <a href="">
            <img src="" alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;