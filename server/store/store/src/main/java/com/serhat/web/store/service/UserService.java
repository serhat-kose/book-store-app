package com.serhat.web.store.service;

import com.serhat.web.store.entity.*;

import java.util.*;

public interface UserService {

    User saveUser(User user);

    Role saveRole(Role role);

    void addRoleToUser(String username,String roleName);

    User getUser(String username);

    List<User>getUsers();
}
