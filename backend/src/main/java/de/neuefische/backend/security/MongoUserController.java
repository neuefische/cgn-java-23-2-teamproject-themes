package de.neuefische.backend.security;


import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class MongoUserController {

    @GetMapping("me")
    public String getUserInfo2() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }


}
