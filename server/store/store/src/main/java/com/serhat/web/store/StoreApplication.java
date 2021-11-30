package com.serhat.web.store;


import com.serhat.web.store.entity.*;
import com.serhat.web.store.entity.Role;
import com.serhat.web.store.service.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.*;
import org.springframework.security.crypto.bcrypt.*;
import org.springframework.security.crypto.password.*;

import java.util.*;


@SpringBootApplication
public class StoreApplication {


	public static void main(String[] args) {
		SpringApplication.run(StoreApplication.class, args);


	}

	@Bean
	PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}


//	@Bean
//	CommandLineRunner runner(UserService userService){
//		return args -> {
//			userService.saveRole(new Role(null,"ROLE_USER"));
//			userService.saveRole(new Role(null,"ROLE_MANAGER"));
//			userService.saveRole(new Role(null,"ROLE_ADMIN"));
//			userService.saveRole(new Role(null,"ROLE_SUPER_ADMIN"));
//
//			userService.saveUser(new User(null,"serhat","1234","serhat@gmail.com",new Long(12345),new ArrayList<>()));
//			userService.saveUser(new User(null,"ahmet","1111","ahmet@gmail.com",new Long(12345),new ArrayList<>()));
//			userService.saveUser(new User(null,"mehmet","2222","mehmet@gmail.com",new Long(12345),new ArrayList<>()));
//			userService.saveUser(new User(null,"ali","3333","ali@gmail.com",new Long(12345),new ArrayList<>()));
//
//			userService.addRoleToUser("serhat","ROLE_ADMIN");
//			userService.addRoleToUser("ahmet","ROLE_USER");
//			userService.addRoleToUser("mehmet","ROLE_USER");
//			userService.addRoleToUser("ali","ROLE_MANAGER");
//
//
//		};
//	}

}
