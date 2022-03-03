import React from "react";

const date = new Date();
const thisyear = date.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright {thisyear}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
