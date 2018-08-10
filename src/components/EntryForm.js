import React from "react";
import PropTypes from "prop-types";

let borderColor = "hsla(0, 0%, 70%, 1)";

const styles = {
  entryForm: {
    margin: "60px auto",
    width: 700,
    display: "flex",
    flexDirection: "column"
  },
  entryEditor: {
    fontFamily: "monospace",
    display: "block",
    width: "100%",
    height: 180,
    boxSizing: "border-box",
    resize: "none",
    borderColor: borderColor,
    padding: "8px"
  },
  tagEditor: {
    fontFamily: "monospace",
    marginTop: 20,
    width: "100%",
    height: 30,
    boxSizing: "border-box",
    border: `1px solid ${borderColor}`,
    padding: "0 8px"
  },
  previewButton: {
    width: "max-content",
    alignSelf: "flex-end",
    marginTop: 20,
    backgroundColor: "white",
    border: `1px solid ${borderColor}`,
    padding: "6px 30px"
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
      <textarea style={styles.entryEditor} onChange={entryEditorOnChange} value={props.text} placeholder={"Dear diary..."} />
      <input style={styles.tagEditor} onChange={tagEditorOnChange} type="text" value={props.tags} placeholder={"software, android, cats"} />
      <button style={styles.previewButton} onClick={props.onPreviewEntryForm}>
        Preview
      </button>
    </div>
  );
};

EntryForm.propTypes = {
  text: PropTypes.string,
  tags: PropTypes.string,
  entryEditorValueChanged: PropTypes.func,
  tagEditorValueChanged: PropTypes.func,
  entryFormSubmitted: PropTypes.func,
  onPreviewEntryForm: PropTypes.func
};

export default EntryForm;
