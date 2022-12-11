import React, { useState } from "react";
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import JournalNote from "./components/JournalNote";
import JournalData from "./data/JournalData";

function App() {
  // IF YOU WANT TO USE DATA BASE
  const [journalNotes, setJournalNotes] = useState(
    JournalData.map((note) => (
      <JournalNote deleteNote={deleteNote} key={note.id} {...note} />
    ))
  );

  function addNewNote(noteFormData) {
    setJournalNotes((prevJournalNotes) => {
      const newJournalNotes = [...prevJournalNotes];
      newJournalNotes.push(
        <JournalNote
          deleteNote={deleteNote}
          key={noteFormData.id}
          {...noteFormData}
        />
      );
      localStorage.setItem(
        `journal-note-${noteFormData.id}`,
        JSON.stringify(noteFormData)
      );
      return newJournalNotes;
    });
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setJournalNotes((prevJournalNotes) => {
      const newJournalNotes = [...prevJournalNotes];
      delete newJournalNotes[noteId - 1];
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
