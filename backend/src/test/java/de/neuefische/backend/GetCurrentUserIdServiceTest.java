package de.neuefische.backend;

import de.neuefische.backend.security.MongoUserDetailsService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

class GetCurrentUserIdServiceTest {

    MongoUserDetailsService mongoUserDetailsService = mock(MongoUserDetailsService.class);

    @Test
    void test_getCurrentUserIdService(){
        //GIVEN
        String expected = "testId123";
        String username = "hans";

        //WHEN
        when(mongoUserDetailsService.getUserIdByUsername(username)).thenReturn(expected);
        String actual = mongoUserDetailsService.getUserIdByUsername(username);

        //THEN
        Assertions.assertEquals(expected, actual);
    }
}
