package com.serhat.web.store.service;

import com.serhat.web.store.dto.request.auth.LoginRequestDTO;
import com.serhat.web.store.dto.request.auth.SignUpRequestDTO;
import com.serhat.web.store.dto.response.JwtResponseDTO;
import com.serhat.web.store.dto.response.MessageResponseDTO;
import com.serhat.web.store.entity.auth.Role;
import com.serhat.web.store.entity.auth.User;

import java.util.*;

public interface UserService {

        JwtResponseDTO login(LoginRequestDTO request);
        MessageResponseDTO register(SignUpRequestDTO request);
}
