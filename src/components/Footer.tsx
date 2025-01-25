import React from "react";
import '../assets/styles/Footer.scss'

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="footer-content">
        <p> © {currentYear} Brian Bui. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;