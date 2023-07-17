package de.neuefische.backend.exception;

import de.neuefische.backend.Theme;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

@SpringBootTest
@AutoConfigureMockMvc
@WithMockUser
class GlobalExceptionHandlerTest {
    @Autowired
    MockMvc mockMvc;

    @DirtiesContext
    @Test
    void expectNotFound_whenGetThemeById() throws Exception {
        //WHEN
        mockMvc.perform(
                        MockMvcRequestBuilders.get("/api/theme/1234abc"))
        //THEN
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }


}
