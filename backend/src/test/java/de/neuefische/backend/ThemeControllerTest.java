package de.neuefische.backend;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
class ThemeControllerTest {


    @Autowired
    MockMvc mockMvc;

    @Autowired
    ThemeRepo themeRepo;

    @Test
    @DirtiesContext
    void expectListOfThemes_whenGetThemes() throws Exception {
        //GIVEN
        String expected = "[]";
        //WHEN
        mockMvc.perform(MockMvcRequestBuilders.get("/api/theme"))
            //THEN
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.content().json(expected));
    }

}
