import { useEffect, useState } from "react";
import { fetchHelloWorld, fetchNotes } from "../api";

export function TestResponse() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchHelloWorld()
      .then((data) => setMessage(data))
      .catch((e) => setError(e.message));
  }, []);

  return <h1>{error ? `error: ${error}` : message.message}</h1>;
}

export function GetAllNotes() {
  const [notes, setNotes] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetchNotes()
      .then((data) => {
        if (!cancelled) setNotes(data);
      })
      .catch((e) => {
        if (!cancelled) setError(e?.message || "Unknown error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return notes.map((n) => n.text)

  // if (error) return <h1>error: {error}</h1>;
  // if (notes === null) return <h1>Loading…</h1>;
  // if (notes.length === 0) return <h1>No notes</h1>;

  // return (
  //   <div>
  //     <h1>Notes</h1>
  //     <ul>
  //       {notes.map((n) => (
  //         <li key={n.id}>
  //           <span>{n.text}</span> {n.completed ? "✅" : "⬜"}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}