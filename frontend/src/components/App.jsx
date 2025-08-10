import Header from "./Header";
import ResponsiveAppBar from "./Navbar";
import Note from "./Note";
import NoteEntry from "./NoteEntry";
import { useState } from "react";

function App(){
    const [listNotes, addNewNotes] = useState([]);

    return (
        <div>
            <ResponsiveAppBar/>
            <Header/>
            <NoteEntry listNotes={listNotes} addNewNotes={addNewNotes}/>
            <Note listNotes={listNotes}/>
        </div>

    )
}

export default App;