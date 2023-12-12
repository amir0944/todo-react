import React from "react";

const NoteStatus = ({ notes }) => {
  const allNote = notes.length;
  const completedNote = notes.filter((note) => note.completed).length;
  const openNote = allNote - completedNote;

  if (!allNote) return <h2>No notes have been added</h2>;

  return (
    <ul className="note-status">
      <li>
        All<span style={{ marginLeft: "0.5rem" }}>{allNote}</span>
      </li>
      <li>
        Completed<span style={{ marginLeft: "0.5rem" }}>{completedNote}</span>
      </li>
      <li>
        Open<span style={{ marginLeft: "0.5rem" }}>{openNote}</span>
      </li>
    </ul>
  );
};

export default NoteStatus;
