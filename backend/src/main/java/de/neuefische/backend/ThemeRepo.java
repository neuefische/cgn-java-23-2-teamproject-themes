package de.neuefische.backend;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ThemeRepo {

    private final List<Theme> themes;

    public ThemeRepo() {
        this.themes = new ArrayList<>();
    }

    public List<Theme> getThemes() {
        return themes;
    }

}
