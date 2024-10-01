import { useState, useRef, useEffect } from "react";
import Cards from "./Cards";
import { Popup } from "./Popup";

function Foreground() {
  const ref = useRef(null);
  const [notes, setNotes] = useState([]);

  // Retrieve notes from local storage on initial load
  useEffect(() => {
      // @ts-ignore

    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []); // This only runs once when the component mounts

  // Save notes to local storage whenever the notes state changes
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);
  // @ts-ignore

  const handleAddNote = (newNote) => {
      // @ts-ignore

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  // @ts-ignore

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, noteIndex) => noteIndex !== index);
    setNotes(updatedNotes);
  };

  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5"
    >
      <Popup onAddNote={handleAddNote} />
      {notes.map((item, index) => (
        <Cards
          key={index}
          data={item}
          reference={ref}
          onDelete={() => handleDeleteNote(index)} // Pass delete handler
        />
      ))}
    </div>
  );
}

export default Foreground;
