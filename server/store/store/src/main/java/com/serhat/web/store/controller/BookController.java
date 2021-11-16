package com.serhat.web.store.controller;

import com.serhat.web.store.entity.*;
import com.serhat.web.store.repository.*;
import com.serhat.web.store.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.data.domain.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    @Autowired

   private BookService bookService;

    @GetMapping("/books")
    public ResponseEntity<Page<Book>> getAllBooks(Pageable pageable){
        return new ResponseEntity<>(bookService.getAllBooks(pageable),HttpStatus.OK) ;
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getById(@PathVariable("id") long id){
        Book book= bookService.getById(id);

        return new ResponseEntity<>(book,HttpStatus.OK);
    }

    @PostMapping("/books/add")
    public ResponseEntity<Book> createBook(@RequestBody Book book){
                 Book _savedBook =  bookService.saveBook(book);
        return new ResponseEntity<>(_savedBook, HttpStatus.CREATED);
    }

    @PutMapping("/books/update")
    public  ResponseEntity<Book> updateBook(@RequestBody Book book){

            Book _updatedBook = bookService.updateBook(book);

            if(_updatedBook!=null){
                return new ResponseEntity<>(_updatedBook,HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
    }

    @DeleteMapping("/books/{id}")
    public  ResponseEntity<HttpStatus> deleteBook(@PathVariable("id")long id){

           boolean result = bookService.deleteBook(id);

           if(result){
               return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
           }
           else {
               return  new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
           }
}
}
