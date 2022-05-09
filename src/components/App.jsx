import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";
import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevState) => {
      return [note,...prevState];
    });
  }

  function deleteNote(id) {
    setNotes((prevState) => {
      return prevState.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />

      <div className="notes">
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
