package com.example.todo;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class TodoController {

    // In-memory store indexed by UUID for quick lookup
    private final Map<UUID, Note> notes = new ConcurrentHashMap<>();

    TodoController() {
        Note newNote = new Note(UUID.randomUUID(), "new Note", false);
        notes.put(newNote.getId(), newNote);
    }

    // GET /api/helloworld -> {"message":"Hello World!!!"}
    @GetMapping(path = "/helloworld", produces = "application/json")
    public Map<String, String> hello() {
        return Map.of("message", "Hello World!!!");
    }

    // GET /api/notes -> list all notes
    @GetMapping(path = "/notes", produces = "application/json")
    public List<Note> getAll() {
        return new ArrayList<>(notes.values());
    }

    // POST /api/notes with JSON body { id, text, completed }
    @PostMapping(path = "/notes", consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public Note add(@RequestBody Note incoming) {
        String trimmed = incoming.getText() == null ? "" : incoming.getText().trim();
        if (trimmed.isEmpty()) {
            throw new IllegalArgumentException("Todo text cannot be empty");
        }
        UUID id = incoming.getId() != null ? incoming.getId() : UUID.randomUUID();
        // Preserve completed from client; default to false if null
        boolean completed = Boolean.TRUE.equals(incoming.getCompleted());

        Note note = new Note(id, trimmed, completed);
        notes.put(id, note);
        return note;
    }

    // PATCH /api/notes/{id} with JSON body to update fields (id is path param and cannot be changed)
    @PatchMapping(path = "/notes/{id}", consumes = "application/json", produces = "application/json")
    public Note patch(@PathVariable UUID id, @RequestBody Note patch) {
        Note existing = findByIdOrThrow(id);

        // Update only provided fields (ignore patch.id)
        if (patch.getText() != null) {
            String trimmed = patch.getText().trim();
            if (trimmed.isEmpty()) {
                throw new IllegalArgumentException("Todo text cannot be empty");
            }
            existing.setText(trimmed);
        }
        if (patch.getCompleted() != null) {
            existing.setCompleted(patch.getCompleted());
        }
        return existing;
    }

    // DELETE /api/notes/{id}
    // Return JSON so frontend's deleteNote() r.json() doesn't fail
    @DeleteMapping(path = "/notes/{id}", produces = "application/json")
    public Map<String, Object> delete(@PathVariable UUID id) {
        Note existing = findByIdOrThrow(id);
        notes.remove(existing.getId());
        return Map.of("deleted", true, "id", existing.getId().toString());
    }

    private Note findByIdOrThrow(UUID id) {
        Note note = notes.get(id);
        if (note == null) {
            throw new NoSuchElementException("No note with id " + id);
        }
        return note;
    }

    // Model matching the frontend JSON
    public static class Note {
        private UUID id;
        private String text;
        private Boolean completed;

        public Note() {}

        public Note(UUID id, String text, Boolean completed) {
            this.id = id;
            this.text = text;
            this.completed = completed;
        }

        public UUID getId() { return id; }
        public void setId(UUID id) { this.id = id; }

        public String getText() { return text; }
        public void setText(String text) { this.text = text; }

        public Boolean getCompleted() { return completed; }
        public void setCompleted(Boolean completed) { this.completed = completed; }
    }
}