import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

let borderColor = "hsla(0, 0%, 70%, 1)";

const styles = {
  previewForm: {
    margin: "60px auto",
    width: 700,
    display: "flex",
    flexDirection: "column"
  },
  entryContainer: {
    backgroundColor: "hsla(0, 0%, 90%, 1)",
    padding: 40,
    minHeight: 150
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  button: {
    width: "max-content",
    alignSelf: "flex-end",
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: "white",
    border: `1px solid ${borderColor}`,
    padding: "6px 30px"
  }
};

const PreviewForm = React.memo(props => {
  return (
    <div style={styles.previewForm}>
      <div style={styles.entryContainer}>
        <ReactMarkdown source={props.text} />
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={props.onEditEntry}>
          Edit
        </button>
        <button style={styles.button} onClick={props.onSaveEntry}>
          Save
        </button>
      </div>
    </div>
  );
});

PreviewForm.propTypes = {
  text: PropTypes.string,
  tags: PropTypes.string,
  onEditEntry: PropTypes.func,
  onSaveEntry: PropTypes.func
};

export default PreviewForm;
