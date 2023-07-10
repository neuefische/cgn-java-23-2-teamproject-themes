package de.neuefische.backend.security;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collections;

public class MongoUserDetailsService implements UserDetailsService {

    private final MongoUserRepository mongoUserRepository;


    public MongoUserDetailsService(MongoUserRepository mongoUserRepository) {
        this.mongoUserRepository = mongoUserRepository;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MongoUser mongoUser = mongoUserRepository.findByUsername(username).orElseThrow(() ->
            new UsernameNotFoundException("Username" + username + "not found"));

        return new User(mongoUser.username(), mongoUser.password(), Collections.emptyList());
    }

}