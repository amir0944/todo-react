import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import { useState } from "react";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDeleteNote = (id) => {
    // const filteredNote = notes.filter((x) => x.id !== id);
    // setNotes(filteredNote);
    setNotes((prevNotes) => prevNotes.filter((x) => x.id !== id));
  };
  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id == noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
