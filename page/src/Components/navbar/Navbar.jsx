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
            <img src="/instagram.svg" alt="inst" />
          </a>
          <a href="">
            <img src="/telegram.svg" alt="tg" />
          </a>
          <a href="">
            <img src="/github.svg" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;