package com.serhat.web.store.controller;

import com.serhat.web.store.entity.*;
import com.serhat.web.store.repository.*;
import com.serhat.web.store.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getById(@PathVariable("id") long id){
        Book book= bookService.getById(id);

        return new ResponseEntity<>(book,HttpStatus.OK);
    }

    @PostMapping("/books")
    public ResponseEntity<Book> createBook(@RequestBody Book book){
                 Book _savedBook =  bookService.saveBook(book);
        return new ResponseEntity<>(_savedBook, HttpStatus.CREATED);
    }



}
