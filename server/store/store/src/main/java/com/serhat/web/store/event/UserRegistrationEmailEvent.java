package com.serhat.web.store.event;

import com.serhat.web.store.dto.response.MessageResponseDTO;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;

@Getter
@Setter
public class UserRegistrationEmailEvent extends ApplicationEvent {

    private static final long serialVersionUID = 1202633068975875914L;
    private String email;

    public UserRegistrationEmailEvent(String email){
        super(new MessageResponseDTO("mail event"));
        this.email =email;
    }
}
