package com.example.todo;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class TodoController {

    @GetMapping("/notes")
    public Map<String, String> getAllTodos() {
        return Map.of("message", "Hello World!!!");
    }
}