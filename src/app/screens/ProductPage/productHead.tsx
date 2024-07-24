import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

export default function ProductHead() {
  const [showLinks, setShowLinks] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("#home-navbar");

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowLinks(false);
    } else {
      setShowLinks(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleSetActiveLink = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <div id="product-head">
      <motion.div
        className="config-navbar"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: showLinks ? 1 : 0, y: showLinks ? 0 : -50 }}
        transition={{ duration: 0.3 }}
      >
        <div className="con-icon">
          <Link to="/" smooth onClick={() => handleSetActiveLink("/")}>
            <img src="./mainHome/sign.png" alt="" />
          </Link>
        </div>
        <div className="con-link">
          <Link
            className={`main-link ${
              activeLink === "#home-navbar" ? "active" : ""
            }`}
            to="/"
            smooth
            onClick={() => handleSetActiveLink("/")}
          >
            Home
          </Link>
          <Link
            className={`main-link ${
              activeLink === "/allProducts" ? "active" : ""
            }`}
            to="/allProducts"
            onClick={() => handleSetActiveLink("allProducts")}
          >
            Room
          </Link>
          <Link
            className={`main-link ${
              activeLink === "/other-page" ? "active" : ""
            }`}
            to="/other-page"
            onClick={() => handleSetActiveLink("#home-navbar")}
          >
            Board
          </Link>
          <Link
            className={`main-link ${
              activeLink === "/other-page" ? "active" : ""
            }`}
            to="/other-page"
            onClick={() => handleSetActiveLink("#home-navbar")}
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
