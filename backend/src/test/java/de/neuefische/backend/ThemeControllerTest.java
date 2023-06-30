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
        String expectedSummer = "https://cdn.discordapp.com/attachments/1090325789939085312/1123893755842412616/00001" +
            "-918857782.png";
        String expectedAutumn = "https://cdn.discordapp.com/attachments/1090325789939085312/1123893768257540137/00043" +
            "-3644440715.png";
        String expectedWinter = "https://cdn.discordapp.com/attachments/1090325789939085312/1123893783323488316/00006" +
            "-1847996727.png";
        String expectedSpring = "https://cdn.discordapp.com/attachments/1090325789939085312/1123893739421708328/00038" +
            "-162447185.png";
        //WHEN
        mockMvc.perform(MockMvcRequestBuilders.get("/api/theme"))
            //THEN
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.jsonPath("$[0].summerUrl").value(expectedSummer))
            .andExpect(MockMvcResultMatchers.jsonPath("$[0].autumnUrl").value(expectedAutumn))
            .andExpect(MockMvcResultMatchers.jsonPath("$[0].winterUrl").value(expectedWinter))
            .andExpect(MockMvcResultMatchers.jsonPath("$[0].springUrl").value(expectedSpring));
    }

    @Test
    @DirtiesContext
    void expectUpdatedTheme_whenUpdatingTheme() throws Exception {
        //GIVEN
        Theme testTheme = new Theme("12345678","Default Theme",
                "https://cdn.discordapp.com/attachments/1090325789939085312/1123893739421708328/00038-162447185.png",
                "https://cdn.discordapp.com/attachments/1090325789939085312/1123893755842412616/00001-918857782.png",
                "https://cdn.discordapp.com/attachments/1090325789939085312/1123893768257540137/00043-3644440715.png",
                "https://cdn.discordapp.com/attachments/1090325789939085312/1123893783323488316/00006-1847996727.png",
                SeasonStatus.SUMMER
        );
        String expected = """
                {
                    "id": "12345678",
                    "name": "Default Theme",
                    "springUrl": "https://cdn.discordapp.com/attachments/1090325789939085312/1123893739421708328/00038-162447185.png",
                    "summerUrl": "https://cdn.discordapp.com/attachments/1090325789939085312/1123893755842412616/00001-918857782.png",
                    "autumnUrl": "https://cdn.discordapp.com/attachments/1090325789939085312/1123893768257540137/00043-3644440715.png",
                    "winterUrl": "https://cdn.discordapp.com/attachments/1090325789939085312/1123893783323488316/00006-1847996727.png",
                    "seasonStatus": "WINTER"
                }
                """;

        //WHEN
        mockMvc.perform(
                MockMvcRequestBuilders.put("/api/theme/%s".formatted("12345678"))
                        .contentType("application/json")
                        .content(expected)
        );

        //THEN
    }


}
