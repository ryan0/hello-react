import { useEffect, useState } from 'react';
import Note from './Note';
import NoteBoardInput from './NoteBoardInput';
import noteService from '../services/noteService';


const NoteBoard = () => {
    const [notes, setNotes] = useState([]);
    const [showAll, setShowAll] = useState(true);
    const notesToShow = showAll ? notes : notes.filter(note => note.important);

    useEffect(() => noteService.getAll().then(data => {
        setNotes(data);
    }), []);

    const toggleImportanceOf = (id) => {
        const note = notes.find(n => n.id === id);
        const changedNote = { ...note, important: !note.important };
        noteService.update(id, changedNote).then(data => {
            setNotes(notes.map(note => note.id !== id ? note : data));
        });
    };

    return (
        <>
            <h1>Notes</h1>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id} note={note} toggleImportance={toggleImportanceOf} />
                )}
            </ul>
            <NoteBoardInput notes={notes} setNotes={setNotes}></NoteBoardInput>
        </>
    );
}

export default NoteBoard