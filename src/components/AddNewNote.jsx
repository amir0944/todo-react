import { React, useState } from "react";
import "../App.css";

const AddNewNote = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return null;
    const newNote = {
      title,
      desc,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNote);
    setTitle("");
    setDesc("");
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note Title..."
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note Description..."
        />
        <button type="submit" className="btn btn--primary">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNewNote;
