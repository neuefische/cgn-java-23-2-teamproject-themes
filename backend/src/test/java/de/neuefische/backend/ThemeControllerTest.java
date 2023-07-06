package de.neuefische.backend;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
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
    ObjectMapper objectMapper;

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

        //GIVEN
        String initialDTOThemeJson = """
               {
                   "name": "Test Theme",
                   "springUrl": "https://spring.png",
                   "summerUrl": "https://summer.png",
                   "autumnUrl": "https://autumn.png",
                   "winterUrl": "https://winter.png",
                   "seasonStatus": "SUMMER"
                }
            """;

        String result = mockMvc.perform(
                        MockMvcRequestBuilders.post("/api/theme")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(initialDTOThemeJson))
                .andReturn().getResponse().getContentAsString();

        Theme saveResultTheme = objectMapper.readValue(result, Theme.class);
        String id = saveResultTheme.id();

        String ThemeJsonToPut = """
               {
                   "id": "%s",
                   "name": "Test Theme",
                   "springUrl": "https://spring.png",
                   "summerUrl": "https://summer.png",
                   "autumnUrl": "https://autumn.png",
                   "winterUrl": "https://winter.png",
                   "seasonStatus": "WINTER"
                }
            """.formatted(id);

        //WHEN
        mockMvc.perform(
                        MockMvcRequestBuilders.put("/api/theme")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(ThemeJsonToPut))

                //THEN
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(ThemeJsonToPut));

    }}
