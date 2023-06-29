package de.neuefische.backend;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class ThemeRepo {

    private final List<Theme> themes;

    public ThemeRepo() {
        this.themes = List.of(new Theme(createId(), "Default Theme",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893739421708328/00038-162447185.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893755842412616/00001-918857782.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893768257540137/00043-3644440715.png",
            "https://cdn.discordapp.com/attachments/1090325789939085312/1123893783323488316/00006-1847996727.png")
        );
    }

    public List<Theme> getThemes() {
        return themes;
    }

}
