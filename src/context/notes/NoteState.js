import { useState } from 'react';
import NoteContext from './noteContext';
const NoteState = (props) => {
    const notesInitial = []
    const [loading, setLoading] = useState(false); 
    const [notes, setNotes] = useState(notesInitial);
    const getNotes = async (e) => {

        const response = await fetch('https://smartnotebook-backend.onrender.com/api/notes/getallnotes', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem('token') }
        });    
        const json = await response.json()
        setNotes(json)
    }
    const DeleteNotes = async (id) => {
       setLoading(true);
        const response = await fetch(`https://smartnotebook-backend.onrender.com/api/notes/deleteNotes/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', "auth-token": localStorage.getItem('token') }
        });
        // const json=await response.json()
        const newNotes = notes.filter((note) => { return note._id !== id });
       setLoading(false);
    }
    const addNote = async (title, discription, tag) => {
        try {
            const note = {
                id: "647b7b412cbb9b31b01a4e14",
                title:
                    title,
                description:
                    discription,
                tag:
                    "personal",
                date:
                    "2023-05-30T17:09:17.318+00:00",

            }
            setNotes(notes.concat(note));
        }
        catch (error) {

        }
    }

    return (

        <NoteContext.Provider value={{ notes, setNotes, addNote, DeleteNotes, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;