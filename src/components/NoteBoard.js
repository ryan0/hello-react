import Note from './Note';
import NoteBoardInput from './NoteBoardInput';
import { useEffect, useState } from 'react';
import axios from 'axios';


const NoteBoard = () => {
    const [notes, setNotes] = useState([]);
    const [showAll, setShowAll] = useState(true);
    const notesToShow = showAll ? notes : notes.filter(note => note.important);

    useEffect(() => axios.get('http://localhost:3001/notes').then(ressponse => {
        setNotes(ressponse.data);
    }), []);

    const toggleImportanceOf = (id) => {
        const url = `http://localhost:3001/notes/${id}`;
        const note = notes.find(n => n.id === id);
        const changedNote = { ...note, important: !note.important };
        axios.put(url, changedNote).then(ressponse => {
            setNotes(notes.map(note => note.id !== id ? note : ressponse.data));
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