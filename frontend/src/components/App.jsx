import Header from "./Header";
import ResponsiveAppBar from "./Navbar";
import Note from "./Note";
import NoteEntry from "./NoteEntry";

function App(){
    return (
        <div>
            <ResponsiveAppBar/>
            <Header/>
            <NoteEntry/>
            <Note/>
        </div>

    )
}

export default App;