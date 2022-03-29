import Note from './Note';
import NoteBoardInput from './NoteBoardInput';
import { useState } from 'react'


const notesDef = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2019-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true
    }
];


const NoteBoard = () => {
    const [notes, setNotes] = useState(notesDef);
    const [showAll, setShowAll] = useState(true);


    const notesToShow = showAll ? notes : notes.filter(note => note.important);


    return (
        <>
            <h1>Notes</h1>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id} note={note} />
                )}
            </ul>
            <NoteBoardInput notes={notes} setNotes={setNotes}></NoteBoardInput>
        </>
    );
}

export default NoteBoard