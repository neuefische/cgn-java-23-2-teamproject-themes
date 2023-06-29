package de.neuefische.backend;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.mock;

class ThemeRepoTest {


    ThemeRepo themeRepo = mock(ThemeRepo.class);

    @Test
    void test_getUUID(){
        //GIVEN
        String expected = "aBcDeF69";

        //WHEN
        when(themeRepo.createId()).thenReturn(expected);
        String actual = themeRepo.createId();

        //THEN
        Assertions.assertEquals(expected, actual);
    }

    @Test
    void test_getThemes() {
        //GIVEN
        List<Theme> expected = new ArrayList<>();
        //WHEN
        when(themeRepo.getThemes()).thenReturn(expected);
        List<Theme> actual = themeRepo.getThemes();

        //THEN
        Assertions.assertEquals(expected, actual);
    }


}
