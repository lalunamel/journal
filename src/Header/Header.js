import React from "react";
import colors from "../codysehl.net-scaffold/js/colors.js";

const styles = {
  header: {
    height: 60,
    borderBottom: `1px solid ${colors.calmestBlack}`,
    fontSize: "1.6em",
    fontWeight: 400
  },
  link: {
    textDecoration: "none",
    color: colors.blue
  },
  ul: {
    margin: 0,
    padding: "16px 0 0 0",
    textAlign: "center"
  },
  li: {
    display: "inline",
    margin: "0 7%"
  }
};

/* nav {
  height: 60px;
  border-bottom: 1px solid lighten($calmer-black, 52%);
  font-size: 1.6em;
  font-weight: 400;
}

nav a {
  text-decoration: none;
  color: #289cd8;
}

nav ul {
  margin: 0;
  padding: 16px 0 0 0;
  text-align: center;
}

nav ul li {
  display: inline;
  margin: 0 7%;
} */

const Header = props => {
  return (
    <nav style={styles.header}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <a style={styles.link} href="http://www.codysehl.net/">
            About
          </a>
        </li>
        <li style={styles.li}>
          <a style={styles.link} href="http://www.codysehl.net/work">
            Work
          </a>
        </li>
        <li style={styles.li}>
          <a style={styles.link} href="http://blog.codysehl.net">
            Blog
          </a>
        </li>
        <li style={styles.li}>
          <a style={styles.link} href="http://journal.codysehl.net">
            Journal
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
