import { useEffect, useState } from "react";
import { fetchNotes } from "../api";

export function TestResponse() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchNotes()
      .then((data) => setMessage(data))
      .catch((e) => setError(e.message));
  }, []);

  return <h1>{error ? `error: ${error}` : message.message}</h1>;
}