import React, { Component } from "react";
import "./App.css";

import Nav from "../Nav";
import Header from "../Header";
import EntryForm from "../EntryForm";
import EntriesContainer from "../EntriesContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entryEditorValue: "",
      tagEditorValue: "",
      entries: [
        {
          date: "2018-08-07",
          tags: "software, android, cats",
          text: `Today I was working on an exercism in Kotlin. When I ran the test in Android Studio I got the error \`Failed to compile. TriangleTest not found\`

          Turns out I just needed to run it in IntelliJ instead. See [this](http://wwww.stackoverflow.com) stackoverflow question.`
        },
        {
          date: "2018-08-07",
          tags: "software, android, cats",
          text: `Today  I was working on an exercism in Kotlin. When I ran the test in Android Studio I got the error \`Failed to compile. TriangleTest not found\`

            Turns out I just needed to run it in IntelliJ instead. See [this](http://wwww.stackoverflow.com) stackoverflow question.`
        }
      ]
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
        <EntriesContainer entries={this.state.entries} />
      </div>
    );
  }
}

export default App;
