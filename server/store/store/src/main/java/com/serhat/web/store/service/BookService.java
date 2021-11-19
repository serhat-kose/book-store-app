package com.serhat.web.store.service;

import com.serhat.web.store.entity.*;
import org.springframework.data.domain.*;

import java.util.*;

public interface BookService {

    Page<Book> getAllBooks(int pageNumber,int pageSize,String sortBy,String sortDir);

    Book getById(long id);

    Book saveBook(Book book);

    Book updateBook(Book book);

    boolean deleteBook(long id);
}
