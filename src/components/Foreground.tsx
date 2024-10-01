import { useState, useRef } from "react";
import Cards from "./Cards.tsx";
import { Popup } from "./Popup.tsx";

function Foreground() {
  const ref = useRef(null);
  const [notes, setNotes] = useState([]);
  // @ts-ignore


  const handleAddNote = (newNote) => {
    // @ts-ignore

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5"
    >
      <Popup onAddNote={handleAddNote} />
      {notes.map((item, index) => (
        <Cards key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
