function Note(prop) {
    return (
        <div id="noteTaking">
            {/* <h2>{prop.listNotes}</h2> */}
            {prop.listNotes.map((item, idx) => (
                <p key={idx}>{item}</p>
            ))}
        </div>
    );
}

export default Note;
