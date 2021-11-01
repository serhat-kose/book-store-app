package com.serhat.web.store.repository;

import com.serhat.web.store.entity.*;
import org.springframework.data.jpa.repository.*;

public interface BookRepository extends JpaRepository<Book,Long> {

      Book findById(long bookId);
}
