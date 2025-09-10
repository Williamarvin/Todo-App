const BASE = import.meta.env?.VITE_API_URL || process.env.REACT_APP_API_URL || "http://localhost:8081/api";

export function OutputBase(){
    console.log(BASE);
    return <h1>{BASE}</h1>
}

export async function fetchNotes(){
    const r = await fetch(`${BASE}/notes`);
    if (!r.ok) throw new Error("Failed to load notes");
    return r.json();
}

export async function addNotes(newNote){
    const r = await fetch(`${BASE}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: newNote.id, text: newNote.text, completed: newNote.completed })
    })
    if (!r.ok) throw new Error("Failed to create note");
    return r.json();
}

export async function updateNote(id, patchNote){
    const r = await fetch(`${BASE}/notes/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify({ id: patchNote.id, text: patchNote.text, completed: patchNote.completed })
    });
}

export async function deleteNote(id){
    const r = await fetch(`${BASE}/notes/${id}`, {method: "DELETE"});
    if (!r.ok) throw new Error("Failed to delete note");
    return r.json();
}