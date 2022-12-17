package com.serhat.web.store.service;

import com.serhat.web.store.entity.book.Book;
import org.springframework.data.domain.*;

public interface BookService {

    Page<Book> getAllBooks(Pageable pageable, String searchText);

    Page<Book> getAllBooks(int pageNumber,int pageSize,String sortBy,String sortDir);

    Book getById(long id);

    Book saveBook(Book book);

    Book updateBook(Book book);

    boolean deleteBook(long id);
}
