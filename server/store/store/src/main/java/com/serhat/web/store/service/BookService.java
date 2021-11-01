package com.serhat.web.store.service;

import com.serhat.web.store.entity.*;

import java.util.*;

public interface BookService {

    List<Book> getAllBooks();

    Book getById(long id);

    Book saveBook(Book book);

    Book updateBook(long id,Book book);

    boolean deleteBook(long id);
}
