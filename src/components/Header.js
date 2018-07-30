import React from "react";

import colors from "../codysehl.net-scaffold/js/colors.js";

const styles = {
  header: {
    textAlign: "center",
    marginTop: 100,
    fontWeight: 400
  },
  title: {
    fontSize: 49
  },
  subtitle: {
    marginTop: 10,
    fontSize: 31,
    lineHeight: 1.2,
    color: colors.calmerBlack
  }
};

export default props => {
  return (
    <div style={styles.header}>
      <div style={styles.title}>Journal</div>
      <div style={styles.subtitle}>serves as a log for what worked, what didn't, and why</div>
    </div>
  );
};
