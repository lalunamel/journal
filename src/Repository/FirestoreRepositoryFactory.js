import firebase from "firebase/app";
import firestore from "firebase/firestore"; // eslint-disable-line no-unused-vars

import FIREBASE_CONFIG from "../firebaseConfig.js";

const FirestoreRepository = onEntriesUpdated => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
  var db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });

  const getEntries = () => {
    db.collection("entries")
      .get()
      .then(querySnapshot => {
        let entries = querySnapshot.docs.map(doc => doc.data());

        onEntriesUpdated(entries);
      });
  };

  const saveNewEntry = (text, tags, onSaveComplete) => {
    db.collection("entries")
      .add({
        date: new Date().toISOString(),
        text,
        tags
      })
      .then(docReference => {
        onSaveComplete();
        getEntries();
      })
      .catch(error => {
        // Todo - handle/display errors
        console.log("Error saving entry");
        console.log(error);
      });
  };

  return {
    saveNewEntry,
    getEntries
  };
};

export default FirestoreRepository;
