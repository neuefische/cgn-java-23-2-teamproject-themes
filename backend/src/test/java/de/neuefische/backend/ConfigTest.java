package de.neuefische.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ConfigTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void whenRequestingIndexHtml_thenShouldReturn200() throws Exception {
        mockMvc.perform(get("/"))
            .andExpect(status().isOk());
    }

    @Test
    void whenRequestingNonExistentResource_thenShouldDefaultToIndexHtml() throws Exception {
        mockMvc.perform(get("/nonExistentURI"))
            .andExpect(status().isOk());
    }
}
