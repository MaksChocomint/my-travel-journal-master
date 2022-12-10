import React, { useState } from "react";
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import JournalNote from "./components/JournalNote";
import JournalData from "./data/JournalData";

function App() {
  const [journalNotes, setJournalNotes] = useState(
    JournalData.map((note) => <JournalNote key={note.id} {...note} />)
  );
  function addNewNote(noteFormData) {
    setJournalNotes((prevJournalNotes) => {
      const newJournalNotes = [...prevJournalNotes];
      newJournalNotes.push(
        <JournalNote key={noteFormData.id} {...noteFormData} />
      );
      return newJournalNotes;
    });
  }

  return (
    <div>
      <Header />
      <section className="journal__notes">{journalNotes}</section>
      <NewNote journalNotes={journalNotes} addNewNote={addNewNote} />
    </div>
  );
}

export default App;
