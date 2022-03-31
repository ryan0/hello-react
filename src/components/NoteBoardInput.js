import axios from 'axios';
import { useState } from 'react'

const NoteBoardInput = ({ notes, setNotes }) => {
    const [newNote, setNewNote] = useState('');

    const addNote = (event) => {
        event.preventDefault();
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
        };

        axios.post('http://localhost:3001/notes', noteObject).then(response => {
            setNotes(notes.concat(response.data));
            setNewNote('');
        });
    }


    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    return (
        <form onSubmit={addNote}>
            <input
                value={newNote}
                onChange={handleNoteChange}
            />
            <button type="submit">save</button>
        </form>
    );
};

export default NoteBoardInput;