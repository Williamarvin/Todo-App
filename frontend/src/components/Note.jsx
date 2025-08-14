import DeleteIcon from '@mui/icons-material/Delete';

function Note(prop) {
    return (
        <div>
            {prop.listNotes.map((noteText, index) => (
                <div key={index} className="note-item">
                    <span>{noteText}</span>
                    <button onClick={() => prop.onDelete(index)}>Delete <DeleteIcon/></button>
                </div>
            ))}
        </div>
    );
}

export default Note;
