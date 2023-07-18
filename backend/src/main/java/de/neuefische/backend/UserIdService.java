package de.neuefische.backend;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.core.context.SecurityContextHolder;
import de.neuefische.backend.security.MongoUserDetailsService;


@Service
@RequiredArgsConstructor
public class UserIdService {

    private final MongoUserDetailsService mongoUserDetailsService;

    public String getCurrentUserId() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return this.mongoUserDetailsService.getUserIdByUsername(username);
    }

}
