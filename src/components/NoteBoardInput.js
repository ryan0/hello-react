import { useState } from 'react'

const NoteBoardInput = ({notes, setNotes}) => {
    const [newNote, setNewNote] = useState('');

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: notes.length + 1,
        }

        setNotes(notes.concat(noteObject));
        setNewNote('');
    }


    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value);
    }

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