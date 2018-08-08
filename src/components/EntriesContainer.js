import React from "react";
import PropTypes from "prop-types";

import Entry from "./Entry";

const styles = {
  entriesContainer: {
    margin: "60px auto",
    width: 700,
    display: "flex",
    flexDirection: "column"
  }
};

const EntriesContainer = props => {
  return (
    <div style={styles.entriesContainer}>
      {props.entries.map(entry => {
        return <Entry key={entry.text} date={entry.date} tags={entry.tags} text={entry.text} />;
      })}
    </div>
  );
};

EntriesContainer.propTypes = {
  entries: PropTypes.array.isRequired
};

export default EntriesContainer;
