package com.serhat.web.store.entity;

import lombok.*;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "user")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USERNAME",nullable = false,unique = true)
    private String username;

    @Column(name = "PASSWORD",nullable = false)
    private String password;

    @Column(name = "EMAIL",nullable = false)
    private String email;

    @Column(name = "MOBILE",nullable = false)
    private Long mobile;

    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Role> roles = new ArrayList<>();



}
