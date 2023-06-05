import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import '../App.css'
function Notes(props) {
  const [loading, setLoading] = useState(false); // New loading state
  const [validationError, setValidationError] = useState('');
  const [id, setId] = useState('')
  const [updateNotes, setUpdateNotes] = useState({ etitle: '', edescription: '', etag: '' })
  const { notes, getNotes, setNotes } = useContext(NoteContext);
  const ref = useRef(null);
  const refClose = useRef(null)
  const updateNote = (currentNote) => {
    setId(currentNote._id);
    ref.current.click();
    setUpdateNotes({
      etitle: currentNote.title, edescription: currentNote.description, etag:
        currentNote.tag
    })  
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    }
    
  });
  const onChange = (e) => {
    setUpdateNotes({ ...updateNotes, [e.target.name]: e.target.value });
  }
  const handleOnSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (updateNotes.etitle.length < 5 || updateNotes.edescription.length < 5 || updateNotes.etag.length < 5) {
      setValidationError('All fields must have a minimum length of 5 characters.');
      return;
    }
    const response = await fetch(`https://smartnotebook-backend.onrender.com/api/notes/updateNotes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({
        title: updateNotes.etitle,
        description: updateNotes.edescription,
        tag: updateNotes.etag,
      }),
    });
    refClose.current.click();
    const json = await response.json();

setLoading(false);
    const newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = updateNotes.etitle;
        newNotes[index].description = updateNotes.edescription;
        newNotes[index].tag = updateNotes.etag;
        break;
      }

    }
    setNotes(newNotes);
    props.showAlert("Updated Successfully ",'success')
  }
  return (
    <>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="container">
              <form>
                <div className="form-group my-3">
                  <label htmlFor="etitle">Title</label>
                  <input type="text" className="form-control" id="etitle" value={updateNotes.etitle} name="etitle" aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange} />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="edescription">Description</label>
                  <input type="text" name="edescription" className="form-control" value={updateNotes.edescription} id="edescription" placeholder="Description" onChange={onChange} />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="etag">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={updateNotes.etag} placeholder="Tag" onChange={onChange} />
                </div>
                {validationError && <div className="alert alert-danger">{validationError}</div>}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              {loading ? ( // Render the spinner when loading is true
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
              <button type="button" onClick={handleOnSubmit} className="btn btn-primary">Update Note</button>)}
            </div>
          </div>
        </div>
      </div>
      <div >
  {notes.length !== 0 ? (
    <div className="container notes">
      {notes.map((note) => (
        <NoteItem key={note._id} showAlert={props.showAlert} note={note} updateNote={updateNote} />
      ))}
    </div>
  ) : (
    <h3 className="text-center my-3">No such note is added</h3>
  )}
</div>



    </>
  );
}

export default Notes;
