import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function AddNote(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function addNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="add-note">
      <div className="add-note-wrapper">
        <form onSubmit={addNote}>
          {isExpanded && (
            <input
              type="text"
              name="title"
              value={note.title}
              placeholder="Add title"
              onChange={handleChange}
              required
            />
          )}
          <textarea
            type="text"
            name="content"
            value={note.content}
            placeholder="Take a note..."
            onChange={handleChange}
            rows={isExpanded?3:1}
            required
            onClick={expand}
          />
          <Zoom in={isExpanded?true: false}>
            <Fab type="submit">
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
