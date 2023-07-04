package de.neuefische.backend;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.test.annotation.DirtiesContext;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;

class ThemeRepoTest {


    ThemeRepo themeRepo = mock(ThemeRepo.class);
    ThemeRepo themeRepoReal = new ThemeRepo();

    Theme testTheme = new Theme("12345678","Default Theme",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893739421708328/00038-162447185.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893755842412616/00001-918857782.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893768257540137/00043-3644440715.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893783323488316/00006-1847996727.png",
            SeasonStatus.SUMMER
    );

    DTOTheme testDTOTheme = new DTOTheme("Default Theme 2",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893739421708328/00038-162447185.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893755842412616/00001-918857782.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893768257540137/00043-3644440715.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893783323488316/00006-1847996727.png",
            SeasonStatus.SUMMER
    );

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
    void test_addTheme(){
        //Give
        List<Theme> expected = List.of(testTheme);

        //When
        when(themeRepo.addTheme(testDTOTheme)).thenReturn(expected);
        List<Theme> actual = themeRepo.addTheme(testDTOTheme);

        //Then
        verify(themeRepo).addTheme(testDTOTheme);
        Assertions.assertEquals(expected, actual);

    }

    @Test
    void test_actually_addTheme(){
        //Give
        int expectedSize = 2;

        //When
        themeRepoReal.addTheme(testDTOTheme);
        int actualSize = themeRepoReal.getThemes().size();

        //Then
        Assertions.assertEquals(expectedSize, actualSize);
    }

    @Test
    void test_updateTheme(){
        //Given

        Theme expected = testTheme;

        //When
        when(themeRepo.updateTheme(testTheme)).thenReturn(expected);
        Theme actual = themeRepo.updateTheme(testTheme);

        //Then
        verify(themeRepo).updateTheme(testTheme);
        Assertions.assertEquals(expected, actual);

    }

    @Test
    @DirtiesContext
    void test_deleteThemeById(){
        //GIVEN
        List<Theme> expected = new ArrayList<>();

        //WHEN
        List<Theme> actual = themeRepoReal.deleteThemeById("12344445");

        //THEN
        Assertions.assertEquals(expected, actual);
    }

}
