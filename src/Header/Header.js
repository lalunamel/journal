import React from "react";

import colors from "../codysehl.net-scaffold/js/colors.js";

const styles = {
  header: {
    height: 60,
    borderBottom: "1px solid",
    borderColor: colors.calmBlack
  }
};

const Header = props => {
  return <div style={styles.header}>Header</div>;
};

export default Header;
