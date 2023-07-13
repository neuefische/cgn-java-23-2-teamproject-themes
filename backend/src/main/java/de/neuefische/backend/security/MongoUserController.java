package de.neuefische.backend.security;

import jakarta.validation.Valid;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class MongoUserController {

    private final MongoUserDetailsService mongoUserDetailsService;

    public MongoUserController(MongoUserDetailsService mongoUserDetailsService) {
        this.mongoUserDetailsService = mongoUserDetailsService;
    }

    @GetMapping("me")
    public String getUserInfo2() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }


    @PostMapping("/login")
    public String login() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @PostMapping("/logout")
    public String logout() {
        return "logged out";
    }

    @PostMapping("/register")
    public String register(@Valid @RequestBody MongoUserDTO newUserDTO) {
        mongoUserDetailsService.registerNewUser(newUserDTO);
        return "registered";
    }

}
