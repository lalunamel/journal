import React, { Component } from "react";
import "./App.css";

import Nav from "../Nav";
import Header from "../Header";
import EntryForm from "../EntryForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entryEditorValue: "",
      tagEditorValue: ""
    };

    this.entryEditorValueChanged = this.entryEditorValueChanged.bind(this);
    this.tagEditorValueChanged = this.tagEditorValueChanged.bind(this);
    this.entryFormSubmitted = this.entryFormSubmitted.bind(this);
  }

  // Actions

  entryEditorValueChanged(value) {
    this.setState({
      entryEditorValue: value
    });
  }

  tagEditorValueChanged(value) {
    this.setState({
      tagEditorValue: value
    });
  }

  entryFormSubmitted() {
    console.log("Submitted:");
    console.log(this.state.entryEditorValue);
    console.log(this.state.tagEditorValue);

    this.setState({
      entryEditorValue: "",
      tagEditorValue: ""
    });
  }

  // HTML

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <EntryForm
          entry={this.state.entryEditorValue}
          tags={this.state.tagEditorValue}
          entryEditorValueChanged={this.entryEditorValueChanged}
          tagEditorValueChanged={this.tagEditorValueChanged}
          entryFormSubmitted={this.entryFormSubmitted}
        />
      </div>
    );
  }
}

export default App;
