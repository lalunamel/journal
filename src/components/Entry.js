import React from "react";
import PropTypes from "prop-types";

import ReactMarkdown from "react-markdown";

import Colors from "../codysehl.net-scaffold/js/colors";

const styles = {
  entry: {
    marginTop: 100,
    fontWeight: 400,
    lineHeight: 1.2
  },
  date: {
    color: Colors.red,
    fontSize: 35,
    fontWeight: 700
  },
  tags: {
    fontSize: 20,
    marginTop: 2,
    color: Colors.calmerBlack,
    fontWeight: 500
  },
  text: {
    marginTop: 15,
    fontSize: 25,
    color: Colors.calmerBlack
  }
};

const Entry = props => {
  const formattedDate = new Date(props.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "2-digit" });

  return (
    <div style={styles.entry}>
      <div style={styles.date}>{formattedDate}</div>
      <div style={styles.tags}>{props.tags}</div>
      <div style={styles.text}>
        <ReactMarkdown source={props.text} />
      </div>
    </div>
  );
};

Entry.propTypes = {
  date: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Entry;
