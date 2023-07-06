package de.neuefische.backend;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Collections;
import java.util.List;

import static org.mockito.Mockito.*;

class ThemeServiceTest {
    ThemeRepo themeRepo = mock(ThemeRepo.class);
    IdService idService = mock(IdService.class);
    ThemeService themeService = new ThemeService(themeRepo, idService);

    Theme testTheme = new Theme("12345678", "Default Theme",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893739421708328/00038-162447185.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893755842412616/00001-918857782.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893768257540137/00043-3644440715.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893783323488316/00006-1847996727.png",
            SeasonStatus.SUMMER
    );

    DTOTheme DTOtestTheme = new DTOTheme("Default Theme",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893739421708328/00038-162447185.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893755842412616/00001-918857782.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893768257540137/00043-3644440715.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893783323488316/00006-1847996727.png",
            SeasonStatus.SUMMER
    );


    @Test
    void test_getThemes() {
        // given
        Mockito.when(themeRepo.findAll())
                .thenReturn(Collections.singletonList(testTheme));

        // when
        List<Theme> actual = themeService.getThemes();

        // then
        Assertions.assertThat(actual)
                .containsExactly(testTheme);
    }

    @Test
    void test_addTheme() {
        // given
        when(idService.createId())
                .thenReturn("12345678");
        when(themeRepo.save(testTheme))
                .thenReturn(testTheme);
        // when
        Theme actual = themeService.addTheme(DTOtestTheme);

        // then
        Assertions.assertThat(actual)
                .isEqualTo(testTheme);
    }

    @Test
    void test_updateTheme(){
        //Given

        Theme expected = testTheme;
        String id = "12345678";

        //When
        when(themeRepo.save(testTheme)).thenReturn(expected);
        Theme actual = themeService.updateTheme(id, DTOtestTheme);

        //Then
        Assertions.assertThat(expected).isEqualTo(actual);

    }

    @Test
    void test_getThemeById(){
        //Given

        String id = "12345678";
        Theme expected = testTheme;

        //When
        when(themeRepo.findById(id)).thenReturn(java.util.Optional.of(expected));
        Theme actual = themeService.getThemeById(id);

        //Then
        Assertions.assertThat(expected).isEqualTo(actual);
    }

    @Test
    void test_deleteThemeById(){
        //Given
        String id = "12345678";

        //When
        themeService.deleteThemeById(id);

        //Then
        verify(themeRepo).deleteById(id);
    }
}
