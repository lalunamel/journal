const InMemoryRepository = onEntriesUpdated => {
  let entries = [];

  const saveNewEntry = (text, tags, onSaveComplete) => {
    entries.push({
      date: new Date().toISOString(),
      text,
      tags
    });

    onSaveComplete();
    onEntriesUpdated(entries);
  };

  return {
    saveNewEntry
  };
};

export default InMemoryRepository;
