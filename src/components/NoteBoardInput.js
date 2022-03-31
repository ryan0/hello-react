import { useState } from 'react'
import noteService from '../services/noteService';

const NoteBoardInput = ({ notes, setNotes }) => {
    const [newNote, setNewNote] = useState('');

    const addNote = (event) => {
        event.preventDefault();
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
        };

        noteService.create(noteObject).then(data => {
            setNotes(notes.concat(data));
            setNewNote('');
        })
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