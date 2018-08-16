const InMemoryRepository = onEntriesUpdated => {
  let entries = [
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
  ];

  const saveNewEntry = (text, tags, onSaveComplete) => {
    entries.push({
      date: new Date().toISOString(),
      text,
      tags
    });

    onSaveComplete();
    onEntriesUpdated(entries);
  };

  const getEntries = () => {
    onEntriesUpdated(entries);
  };

  return {
    saveNewEntry,
    getEntries
  };
};

export default InMemoryRepository;
