package com.serhat.web.store.entity.auth;

import com.serhat.web.store.enums.RoleEnum;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "roles")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private RoleEnum name;
}
