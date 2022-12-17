package com.serhat.web.store.event;

import com.serhat.web.store.entity.auth.User;
import com.serhat.web.store.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class UserRegistrationEmailEventListener implements ApplicationListener<UserRegistrationEmailEvent> {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public void onApplicationEvent(UserRegistrationEmailEvent event) {

        final User user = userRepository.findByEmail(event.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User Email Not Found"));

        String subject  = null;
        String body  = null;
        String from  = "serhatkse94@gmail.com";

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(from);
        message.setTo(user.getEmail());
        message.setSubject("Heey You Successfully registered");
        message.setText("Heey You Successfully registered");

        mailSender.send(message);

    }
}
