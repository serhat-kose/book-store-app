package com.serhat.web.store.repository;

import com.serhat.web.store.entity.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.*;
import org.springframework.data.repository.query.*;

public interface BookRepository extends PagingAndSortingRepository<Book,Long> {

      Book findById(long bookId);

      @Query("From Book b  where b.title LIKE %:searchText% OR b.author LIKE %:searchText% OR b.genre LIKE %:searchText%  OR b.language LIKE %:searchText%  order by b.price DESC ")
      Page<Book> findAllBooks(Pageable pageable, @Param("searchText") String searchText);
}
