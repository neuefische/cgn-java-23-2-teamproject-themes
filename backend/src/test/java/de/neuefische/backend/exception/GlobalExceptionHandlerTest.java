package de.neuefische.backend.exception;

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


    @Test
    void expectNoSuchThemeException_whenGetThemeById() throws Exception {
        //Given
        String expectedMessage = """
                {
                 "message": "No theme found with Id: 1234abc"
                }
            """;

        //WHEN
        mockMvc.perform(
                        MockMvcRequestBuilders.get("/api/theme/1234abc"))
        //THEN
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andExpect(MockMvcResultMatchers.content().json(expectedMessage));
    }


    @DirtiesContext
    @Test
    void expectMethodArgumentNotValidException_whenPostingThemeWithInvalidData() throws Exception {
        //GIVEN
        String expectedMessage = """
                {
                 "message": "Invalid URL"
                }
            """;
        String testThemeWithoutIdJson = """
               {
                   "name": "Test Theme",
                   "springUrl": "//spring.png",
                   "summerUrl": "https://summer.png",
                   "autumnUrl": "https://autumn.png",
                   "winterUrl": "https://winter.png",
                   "seasonStatus": "SUMMER"
                }
            """;

        //WHEN
        mockMvc.perform(
                MockMvcRequestBuilders.post("/api/theme")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(testThemeWithoutIdJson)
                        .with(csrf()))

                //THEN
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.content().json(expectedMessage));
    }

}
