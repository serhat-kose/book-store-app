package com.serhat.web.store.service.impl;

import com.serhat.web.store.entity.book.Book;
import com.serhat.web.store.repository.*;
import com.serhat.web.store.service.*;
import lombok.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Page<Book> getAllBooks(Pageable pageable, String searchText) {
        return bookRepository.findAllBooks(pageable,searchText);
    }

    @Override
    public Page<Book> getAllBooks(int pageNumber,int pageSize,String sortBy,String sortDir) {
        return bookRepository.findAll(PageRequest.of(pageNumber,pageSize,sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending()));
    }

    @Override
    public Book getById(long id) {
        return bookRepository.findById(id);
    }

    @Override
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Book updateBook(Book book) {

        Book value=bookRepository.findById(book.getId().longValue());

        if(value!=null){
            value.setAuthor(book.getAuthor());
            value.setCoverPhotoURL(book.getCoverPhotoURL());
            value.setLanguage(book.getLanguage());
            value.setTitle(book.getTitle());
            value.setPrice(book.getPrice());
            value.setIsbnNumber(book.getIsbnNumber());
            value.setGenre(book.getGenre());

            return bookRepository.save(value);
        }
        else {
            return  null;
        }
    }

    @Override
    public boolean deleteBook(long id) {

        Book value=bookRepository.findById(id);

        if(value!=null){
            bookRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
