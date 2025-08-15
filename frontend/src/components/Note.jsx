import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

function Note(prop) {
    return (
        <div>
            {prop.listNotes.map((n) => (
                <div className="note-item">
                    <button onClick={() => prop.toggleTick(n.id)}>
                        {n.completed ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                    </button>
                    <span>{n.text}</span>
                    <button onClick={() => prop.onDelete(n.id)}>
                        Delete <DeleteIcon />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Note;
