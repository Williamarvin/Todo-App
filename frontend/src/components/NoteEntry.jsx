import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

function NoteEntry(prop){
    const [placeholder, setPlaceholder] = useState("");
    const [noteInput, setInput] = useState("");

    function changeInput(event){
        setInput(event.target.value);
    }

    function addNotes(e){
        e.preventDefault();

        prop.addNewNotes([...prop.listNotes, noteInput]);
        setInput("");
    }

    return (
        <div id='text-box'>
            <span className="icon" id="entry">➕ Add a Task</span>

            <input
                type="text" 
                value={noteInput}
                id="entry" 
                placeholder={placeholder}
                onChange={changeInput}
                onFocus={() => setPlaceholder("Try Typing 'Buy Milk'")}
                onBlur={() => setPlaceholder("")}
            />

            <button type="submit" id="entry" onClick={addNotes}>
                <ArrowForwardIosIcon />
            </button>
        </div>
    )
}

export default NoteEntry;