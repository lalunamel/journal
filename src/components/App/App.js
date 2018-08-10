import React, { Component } from "react";
import "./App.css";

import Nav from "../Nav";
import Header from "../Header";
import EntryForm from "../EntryForm";
import PreviewForm from "../PreviewForm";
import EntriesContainer from "../EntriesContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inPreviewMode: false,
      entryEditorValue: "",
      tagEditorValue: "",
      entries: [
        {
          date: new Date().toISOString(),
          tags: "software, android, cats",
          text: `Today I was working on an exercism in Kotlin. When I ran the test in Android Studio I got the error \`Failed to compile. TriangleTest not found\`
          Turns out I just needed to run it in IntelliJ instead. See [this](http://wwww.stackoverflow.com) stackoverflow question.`
        },
        {
          date: new Date().toISOString(),
          tags: "software, android, cats",
          text: `Today  I was wonrking on an exercism in Kotlin. When I ran the test in Android Studio I got the error \`Failed to compile. TriangleTest not found\`
            Turns out I just needed to run it in IntelliJ instead. See [this](http://wwww.stackoverflow.com) stackoverflow question.`
        }
      ]
    };

    this.entryEditorValueChanged = this.entryEditorValueChanged.bind(this);
    this.tagEditorValueChanged = this.tagEditorValueChanged.bind(this);
    this.entryFormSubmitted = this.entryFormSubmitted.bind(this);
    this.previewEntryFormClicked = this.previewEntryFormClicked.bind(this);
    this.onEditEntry = this.onEditEntry.bind(this);
    this.onSaveEntry = this.onSaveEntry.bind(this);
  }

  // Actions

  // Entry Edit Form
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

  previewEntryFormClicked() {
    this.setState({
      inPreviewMode: true
    });
  }

  // Entry Preview

  onEditEntry() {
    console.log("Edit clicked");
  }

  onSaveEntry() {
    console.log("Save clicked");
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
        {this.state.inPreviewMode ? (
          <PreviewForm text={this.state.entryEditorValue} tags={this.state.tagEditorValue} onEditEntry={this.onEditEntry} onSaveEntry={this.onSaveEntry} />
        ) : (
          <EntryForm
            text={this.state.entryEditorValue}
            tags={this.state.tagEditorValue}
            entryEditorValueChanged={this.entryEditorValueChanged}
            tagEditorValueChanged={this.tagEditorValueChanged}
            entryFormSubmitted={this.entryFormSubmitted}
            onPreviewEntryForm={this.previewEntryFormClicked}
          />
        )}
        <EntriesContainer entries={this.state.entries} />
      </div>
    );
  }
}

export default App;
