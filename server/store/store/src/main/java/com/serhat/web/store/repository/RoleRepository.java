package com.serhat.web.store.repository;

import com.serhat.web.store.entity.auth.Role;
import com.serhat.web.store.enums.RoleEnum;
import org.springframework.data.jpa.repository.*;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role,Long> {

    Optional<Role> findByName(RoleEnum name);
}
