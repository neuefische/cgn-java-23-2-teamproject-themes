package de.neuefische.backend;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class BackendApplicationTests {

    @Autowired
    private ThemeService themeService;

    @Test
    void contextLoads() {
        Assertions.assertNotNull(themeService);
    }
}