import React, { Component } from "react";
import "./App.css";

import RepositoryFactory from "../../Repository/FirestoreRepositoryFactory";

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
      entries: []
    };

    this.entryEditorValueChanged = this.entryEditorValueChanged.bind(this);
    this.tagEditorValueChanged = this.tagEditorValueChanged.bind(this);
    this.previewEntryFormClicked = this.previewEntryFormClicked.bind(this);
    this.onEditEntry = this.onEditEntry.bind(this);
    this.onSaveEntry = this.onSaveEntry.bind(this);
    this.onEntriesUpdated = this.onEntriesUpdated.bind(this);
    this.Repository = RepositoryFactory(this.onEntriesUpdated);
  }

  componentDidMount() {
    this.Repository.getEntries();
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
    this.setState({
      inPreviewMode: false
    });
  }

  onSaveEntry() {
    console.log("Saving...");

    this.Repository.saveNewEntry(this.state.entryEditorValue, this.state.tagEditorValue, () => {
      console.log("Save complete!");

      this.setState({
        entryEditorValue: "",
        tagEditorValue: "",
        inPreviewMode: false
      });
    });
  }

  // Updating

  onEntriesUpdated(newEntries) {
    this.setState({
      entries: newEntries
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
            onPreviewEntryForm={this.previewEntryFormClicked}
          />
        )}
        <EntriesContainer entries={this.state.entries} />
      </div>
    );
  }
}

export default App;
