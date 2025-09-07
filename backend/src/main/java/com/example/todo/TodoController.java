package com.example.todo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class TodoController {

    @GetMapping("/notes")
    public String getAllTodos() {
        // Logic to retrieve all todos
        return "Hello World!!!";
    }
}