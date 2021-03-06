import React from "react";
import colors from "../codysehl.net-scaffold/js/colors.js";

const styles = {
  nav: {
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

export default React.memo(props => {
  return (
    <nav style={styles.nav}>
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
});
