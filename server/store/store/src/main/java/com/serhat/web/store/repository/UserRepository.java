package com.serhat.web.store.repository;

import com.serhat.web.store.entity.*;
import org.springframework.data.jpa.repository.*;

public interface UserRepository extends JpaRepository<User,Long> {

    User findByUsername(String username);
}
