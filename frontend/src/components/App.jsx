import Header from './Header';
import ResponsiveAppBar from './Navbar';
import Note from './Note';
import NoteEntry from './NoteEntry';
import { useState } from 'react';

function App() {
    const [listNotes, addNewNotes] = useState([]);
    const [completedNotes, addCompletedNotes] = useState([]);

    function completeNote(index){
        addCompletedNotes(prevCom => {
            addCompletedNotes((previousNotes) => previousNotes.filter((_, i) => i !== index));
        })
    }

    function deleteNote(index) {
        addNewNotes((previousNotes) => previousNotes.filter((_, i) => i !== index));
    }

    return (
        <div>
            <ResponsiveAppBar />
            <Header />
            <NoteEntry listNotes={listNotes} addNewNotes={addNewNotes} />
            <Note listNotes={listNotes} onDelete={deleteNote} />
        </div>
    );
}

export default App;
