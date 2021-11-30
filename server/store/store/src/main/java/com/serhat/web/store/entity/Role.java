package com.serhat.web.store.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "role")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String name;
}
