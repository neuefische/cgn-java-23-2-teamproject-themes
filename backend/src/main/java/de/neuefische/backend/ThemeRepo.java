package de.neuefische.backend;

import lombok.Data;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
@Data
public class ThemeRepo {

    private final List<Theme> themes;

    public ThemeRepo() {
        this.themes = new ArrayList<>();
        this.themes.add(new Theme("12344445", "Default Theme",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893739421708328/00038-162447185.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893755842412616/00001-918857782.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893768257540137/00043-3644440715.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893783323488316/00006-1847996727.png",
            SeasonStatus.SUMMER
        ));
    }

    public String createId(){
        return UUID.randomUUID().toString().substring(0,8);
    }

    public Theme updateTheme(Theme theme) {
        for (int i = 0; i < themes.size(); i++) {
            if (themes.get(i).id().equals(theme.id())) {
                themes.set(i, theme);
                return theme;
            }
        }
        return null;
    }

    public List<Theme> addTheme(DTOTheme themeToBuild) {
        Theme theme = new Theme(createId(), themeToBuild.name(), themeToBuild.springUrl(),themeToBuild.summerUrl(),
                themeToBuild.autumnUrl(), themeToBuild.winterUrl(),themeToBuild.seasonStatus());
        themes.add(theme);
        return themes;
    }

    public Theme getThemeById(String id) {
        Optional<Theme> optional = this.themes.stream()
                .filter(theme -> theme.id().equals(id))
                .findFirst();
        return optional.orElse(null);
    }
}
