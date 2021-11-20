package com.serhat.web.store.repository;

import com.serhat.web.store.entity.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.*;
import org.springframework.data.repository.query.*;

public interface BookRepository extends PagingAndSortingRepository<Book,Long> {

      Book findById(long bookId);

      @Query("From Book b  where b.title=:searchText OR b.author=:searchText OR b.genre=:searchText OR b.language=:searchText OR b.price=:searchText")
      Page<Book> findAllBooks(Pageable pageable, @Param("searchText") String searchText);
}
