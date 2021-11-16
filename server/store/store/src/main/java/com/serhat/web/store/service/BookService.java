package com.serhat.web.store.service;

import com.serhat.web.store.entity.*;
import org.springframework.data.domain.*;

import java.util.*;

public interface BookService {

    Page<Book> getAllBooks(Pageable pageable);

    Book getById(long id);

    Book saveBook(Book book);

    Book updateBook(Book book);

    boolean deleteBook(long id);
}
