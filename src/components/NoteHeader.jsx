import React from "react";

const NoteHeader = ({ notes, sortBy, onSort }) => {
  return (
    <div className="note-header" style={{ paddingBottom: "1rem" }}>
      <h1>My Notes({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">sort based on latest notes</option>
        <option value="earliest">sort based on earliest notes</option>
        <option value="completed">sort based on completed notes</option>
      </select>
    </div>
  );
};

export default NoteHeader;
