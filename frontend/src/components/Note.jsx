import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';


function Note(prop) {

    const [tickBool, setTick] = useState(false);

    function toggleTick(){
        tickBool ? setTick(false) : setTick(true);
    }
    

    return (
        <div>
            {prop.listNotes.map((noteText, index) => (
                <div key={index} check={tickBool} className="note-item">

                    <button onClick={toggleTick}>
                        {tickBool ? <CheckCircleOutlineIcon/> : <CheckCircleIcon/>};
                    </button>
                    <span>{noteText}</span>
                    <button onClick={() => prop.onDelete(index)}>
                        Delete <DeleteIcon/>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Note;
