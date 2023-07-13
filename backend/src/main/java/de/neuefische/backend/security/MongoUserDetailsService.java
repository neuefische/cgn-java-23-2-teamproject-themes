package de.neuefische.backend.security;

import de.neuefische.backend.IdService;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class MongoUserDetailsService implements UserDetailsService {

    private final MongoUserRepository mongoUserRepository;

    private final IdService idService = new IdService();

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        MongoUser mongoUser = mongoUserRepository.findByUsername(username).orElseThrow(() ->
            new UsernameNotFoundException("Username" + username + "not found"));

        return new User(mongoUser.username(), mongoUser.password(), Collections.emptyList());
    }

    public void registerNewUser(MongoUserWithoutId newUserDTO){
        MongoUser newUser = new MongoUser(idService.createId() ,newUserDTO.username(), newUserDTO.password());
        mongoUserRepository.save(newUser);
    }

}
