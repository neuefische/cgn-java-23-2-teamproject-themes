package de.neuefische.backend;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.util.Assert;

@SpringBootTest
@AutoConfigureMockMvc
class ThemeControllerTest {


    @Autowired
    MockMvc mockMvc;

    @Test
    void expectEmptyList_whenGetThemes() throws Exception {

        //GIVEN
        // -> Init empty test MongoDB with flapdoodle
        //WHEN
        mockMvc.perform(MockMvcRequestBuilders.get("/api/theme"))
                //THEN
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[]"));
    }

    @DirtiesContext
    @Test
    void expectTheme_whenAddTheme() throws Exception {
        //GIVEN
        String testDTOThemeJson = """
               {
                   "name": "Test Theme",
                   "springUrl": "https://spring.png",
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
                                .content(testDTOThemeJson))
                //THEN
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("name").value("Test Theme"))
                .andExpect(MockMvcResultMatchers.jsonPath("springUrl").value("https://spring.png"))
                .andExpect(MockMvcResultMatchers.jsonPath("summerUrl").value("https://summer.png"))
                .andExpect(MockMvcResultMatchers.jsonPath("autumnUrl").value("https://autumn.png"))
                .andExpect(MockMvcResultMatchers.jsonPath("winterUrl").value("https://winter.png"))
                .andExpect(MockMvcResultMatchers.jsonPath("seasonStatus").value("SUMMER"));
    }

    @DirtiesContext
    @Test
    void expectTheme_whenUpdateTheme() throws Exception{
        String initialThemeJson = """
               {
                   "id": "12345678",
                   "name": "Test Theme",
                   "springUrl": "https://spring.png",
                   "summerUrl": "https://summer.png",
                   "autumnUrl": "https://autumn.png",
                   "winterUrl": "https://winter.png",
                   "seasonStatus": "SUMMER"
                }
            """;
        mockMvc.perform(
                MockMvcRequestBuilders.post("/api/theme")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(initialThemeJson));
        mockMvc.perform(MockMvcRequestBuilders.get("/api/theme"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[" + initialThemeJson + "]"));

        String testThemeJson = """
               {
                   "id": "12345678"
                   "name": "Updated Theme",
                   "springUrl": "https://spring.png",
                   "summerUrl": "https://summer.png",
                   "autumnUrl": "https://autumn.png",
                   "winterUrl": "https://winter.png",
                   "seasonStatus": "WINTER"
                }
            """;
        mockMvc.perform(
                        MockMvcRequestBuilders.put("/api/theme")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(testThemeJson))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[" + testThemeJson + "]"));

        // This needs to be continued ...
    }}
