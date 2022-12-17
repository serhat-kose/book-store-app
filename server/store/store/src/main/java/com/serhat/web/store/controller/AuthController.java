package com.serhat.web.store.controller;

import com.serhat.web.store.dto.request.auth.LoginRequestDTO;
import com.serhat.web.store.dto.request.auth.SignUpRequestDTO;
import com.serhat.web.store.dto.response.JwtResponseDTO;
import com.serhat.web.store.dto.response.MessageResponseDTO;
import com.serhat.web.store.entity.auth.Role;
import com.serhat.web.store.entity.auth.User;
import com.serhat.web.store.entity.auth.UserDetailsImpl;
import com.serhat.web.store.enums.RoleEnum;
import com.serhat.web.store.repository.RoleRepository;
import com.serhat.web.store.repository.UserRepository;
import com.serhat.web.store.security.config.JwtUtils;
import com.serhat.web.store.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequestDTO loginRequest) {
        return ResponseEntity.ok(userService.login(loginRequest));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody SignUpRequestDTO signUpRequest) {

        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponseDTO("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponseDTO("Error: Email is already in use!"));
        }
        return ResponseEntity.ok(userService.register(signUpRequest));
    }

}


