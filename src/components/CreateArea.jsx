import React, { useState } from "react";

function CreateArea(props) {
  const [createNote, setCreateNote] = useState({
    title: "",
    content: ""
  });

  function handleNoteInput(e) {
    const { name, value } = e.target;
    setCreateNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(e) {
    setCreateNote({
      title: "",
      content: ""
    });
    e.preventDefault();
    props.onAdd(createNote);
  }

  return (
    <div>
      <form>
        <input
          value={createNote.title}
          onChange={handleNoteInput}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={createNote.content}
          onChange={handleNoteInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
