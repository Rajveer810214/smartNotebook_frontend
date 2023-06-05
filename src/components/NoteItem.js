import React, { useContext,useState } from 'react';
import NoteContext from '../context/notes/noteContext';
function NoteItem({ note, updateNote,showAlert }) {
  const [loading, setLoading] = useState(false); // New loading state
  const { DeleteNotes } = useContext(NoteContext);
  const deleteNoteIcon = (e) => {
   setLoading(true);

    DeleteNotes(note._id);
    setTimeout(() => {
      
       setLoading(false)
    }, 1000);
    
      showAlert("Deleted Successfully ",'success')
  
  };
  const handleUpdate = () => {
    updateNote(note);
  };
  
  return (
    <div className="card mx-4 my-4" style={{ width: '18rem' }}>
      <div className="card-body">
        <span className="icons d-flex flex-row-reverse">
        {loading ? ( 
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <i className="fa-solid fa-trash mx-2" onClick={deleteNoteIcon}></i>)}
          <i className="fa-solid fa-pen-to-square mx-2" onClick={handleUpdate}></i>
        </span>
        <div>
          <h5 className="card-title">Title: {note.title}</h5>
        </div>
        <p className="card-text">{note.description}</p>
      </div>
    </div>
  );
}

export default NoteItem;
