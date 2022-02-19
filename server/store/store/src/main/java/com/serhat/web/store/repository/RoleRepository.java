package com.serhat.web.store.repository;

import com.serhat.web.store.entity.*;
import org.springframework.data.jpa.repository.*;

public interface RoleRepository extends JpaRepository<Role,Long> {

    Role findByName(String name);
}
