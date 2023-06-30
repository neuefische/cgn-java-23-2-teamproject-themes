package de.neuefische.backend;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class ThemeServiceTest {

    ThemeService themeService = mock(ThemeService.class);

    @Test
    void test_getThemes() {
        //GIVEN
        Theme testTheme = new Theme("12345678","Default Theme",
                "https://cdn.discordapp.com/attachments/1090325789939085312/1123893739421708328/00038-162447185.png",
                "https://cdn.discordapp.com/attachments/1090325789939085312/1123893755842412616/00001-918857782.png",
                "https://cdn.discordapp.com/attachments/1090325789939085312/1123893768257540137/00043-3644440715.png",
                "https://cdn.discordapp.com/attachments/1090325789939085312/1123893783323488316/00006-1847996727.png",
                SeasonStatus.SUMMER
        );
        List<Theme> expected = List.of(testTheme);

        //WHEN
        when(themeService.getThemes()).thenReturn(expected);
        List<Theme> actual = themeService.getThemes();

        //THEN
        Assertions.assertEquals(expected, actual);
    }

}
