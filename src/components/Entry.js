import React from "react";
import PropTypes from "prop-types";

import Colors from "../codysehl.net-scaffold/js/colors";

const styles = {
  entry: {},
  date: {
    color: Colors.red
  },
  tags: {},
  text: {}
};

const Entry = props => {
  return (
    <div style={styles.entry}>
      <div style={styles.date}>{props.date}</div>
      <div style={styles.tags}>{props.tags}</div>
      <div style={styles.text}>{props.text}</div>
    </div>
  );
};

Entry.propTypes = {
  date: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Entry;
