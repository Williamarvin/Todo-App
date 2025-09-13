import Header from './Header';
import ResponsiveAppBar from './Navbar';
import Note from './Note';
import NoteEntry from './NoteEntry';
import { TestResponse, GetAllNotes } from './FetchBackend';
import { useState, useMemo } from 'react';
import Container from '@mui/material/Container';

function App() {
    const [listNotes, addNewNotes] = useState([]);
    const [editedNote, changeNote] = useState("")

    const inProgress = useMemo(() => listNotes.filter((n) => !n.completed), [listNotes]);
    const completed = useMemo(() => listNotes.filter((n) => n.completed), [listNotes]);

    function deleteNote(index) {
        addNewNotes((previousNotes) => previousNotes.filter((n) => n.id !== index));
    }

    function changeNotes(){
        
    }

    function toggleTick(index) {
        addNewNotes((prevNotes) =>
            prevNotes.map((n) => (n.id === index ? { ...n, completed: !n.completed } : { ...n }))
        );
    }

    return (
        <div>
            <Container maxWidth="md">
                <ResponsiveAppBar />
                <Header />
                <h1>Template: </h1><TestResponse/>
                <NoteEntry listNotes={listNotes} addNewNotes={addNewNotes} />
                <h1>In Progress</h1>
                <Note listNotes={inProgress} toggleTick={toggleTick} onDelete={deleteNote} />
                <h1>Completed</h1>
                <Note listNotes={completed} toggleTick={toggleTick} onDelete={deleteNote} />
            </Container>
        </div>
    );
}

export default App;
