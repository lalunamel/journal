import React, { Component } from "react";
import "./App.css";

import Nav from "../Nav";
import Header from "../Header";
import EntryForm from "../EntryForm";

class App extends Component {
  tagEditorValueChanged(value) {
    console.log(value);
  }

  entryEditorValueChanged(value) {
    console.log(value);
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <EntryForm entry={""} tags={[]} tagEditorValueChanged={this.tagEditorValueChanged} entryEditorValueChanged={this.entryEditorValueChanged} />
      </div>
    );
  }
}

export default App;
