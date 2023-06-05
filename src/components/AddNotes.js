import React, { useState, useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddNotes(props) {
  const { addNote } = useContext(NoteContext);
  const [notes, setNotes] = useState({ title: '', description: '', tag: '' });
  const [loading, setLoading] = useState(false); // New loading state

  const handleOnClick = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting the form

    const response = await fetch('https://smartnotebook-backend.onrender.com/api/notes/addNotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem('token') },
      body: JSON.stringify({ title: notes.title, description: notes.description, tag: notes.tag })
    });

    addNote(notes.title, notes.description, notes.tag);

    setLoading(false); // Set loading to false after the operation is complete
    props.showAlert('Added Note Successfully', 'success');
  };

  const onchange = (e) => {
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleOnClick} style={{ marginTop: '-43px' }}>
        <h1 style={{ textAlign: 'center' }}>Save Notes by SmartNoteBook😊😊</h1>

        <div className="form-group my-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            style={{ border: '2px solid black' }}
            className="form-control"
            id="title"
            name="title"
            value={notes.title}
            aria-describedby="emailHelp"
            placeholder="Enter your title"
            minLength={5}
            required
            onChange={onchange}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="description">Description</label>
          <input
            style={{ border: '2px solid black' }}
            type="text"
            className="form-control"
            value={notes.description}
            name="description"
            id="description"
            placeholder="Enter the description"
            minLength={5}
            required
            onChange={onchange}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            style={{ border: '2px solid black' }}
            className="form-control"
            value={notes.tag}
            name="tag"
            id="tag"
            placeholder="Enter the tag"
            minLength={5}
            required
            onChange={onchange}
          />
        </div>

        {loading ? ( // Render the spinner when loading is true
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <button type="submit" className="btn btn-primary">
            Add Note
          </button>
        )}
      </form>
    </div>
  );
}

export default AddNotes;
