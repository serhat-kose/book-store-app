package com.serhat.web.store.repository;

import com.serhat.web.store.entity.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.*;

public interface BookRepository extends PagingAndSortingRepository<Book,Long> {

      Book findById(long bookId);
}
