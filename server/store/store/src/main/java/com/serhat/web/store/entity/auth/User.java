package com.serhat.web.store.entity.auth;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.*;

@Entity
@Table(name = "users")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(name = "USERNAME",nullable = false,unique = true)
    private String username;

    @NotBlank
    @Column(name = "PASSWORD",nullable = false)
    private String password;

    @NotBlank
    @Column(name = "EMAIL",nullable = false)
    private String email;

    @Column(name = "MOBILE",nullable = false)
    private Long mobile;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public User(String username, String email, String password,Long mobile) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
    }

}
