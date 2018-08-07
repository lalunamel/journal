import React from "react";
import PropTypes from "prop-types";

const styles = {
  entryForm: {
    margin: "60px auto",
    width: 700,
    display: "flex",
    flexDirection: "column"
  },
  entryEditor: {
    display: "block",
    width: "100%",
    height: 180,
    boxSizing: "border-box",
    resize: "none"
  },
  tagEditor: {
    marginTop: 20,
    width: "100%",
    boxSizing: "border-box"
  },
  submitButton: {
    width: "max-content",
    alignSelf: "flex-end",
    marginTop: 20,
    backgroundColor: "lightgray",
    border: "none",
    padding: "3px 10px"
  }
};

const EntryForm = props => {
  const entryEditorOnChange = e => {
    props.entryEditorValueChanged(e.target.value);
  };

  const tagEditorOnChange = e => {
    props.tagEditorValueChanged(e.target.value);
  };

  return (
    <div style={styles.entryForm}>
      <textarea style={styles.entryEditor} onChange={entryEditorOnChange} value={props.entry} placeholder={"Dear diary..."} />
      <input style={styles.tagEditor} onChange={tagEditorOnChange} type="text" value={props.tags} placeholder={"software, android, cats"} />
      <button style={styles.submitButton} onClick={props.entryFormSubmitted} type="submit">
        SUBMIT
      </button>
    </div>
  );
};

EntryForm.propTypes = {
  entry: PropTypes.string,
  tags: PropTypes.string,
  entryEditorValueChanged: PropTypes.func,
  tagEditorValueChanged: PropTypes.func,
  entryFormSubmitted: PropTypes.func
};

export default EntryForm;
