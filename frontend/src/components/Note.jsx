import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

function Note(prop) {

    const [editable, setEditable] = useState(true);

    function changeEditable(){
        editable ? setEditable(false) : setEditable(true);
    }

    return (
        <div>
            {prop.listNotes.map((n) => (
                <div className="note-item">
                    <button onClick={() => prop.toggleTick(n.id)}>
                        {n.completed ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                    </button>
                    <div onClick={changeEditable}>
                        {editable ? <span>{n.text}</span> : <input onChange={prop.changeNotes} value={prop.editedNote}/>}   
                    </div>
                    
                    <button onClick={() => prop.onDelete(n.id)}>
                        Delete <DeleteIcon />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Note;
