package de.neuefische.backend;


import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
public class ThemeService {


private final ThemeRepo themeRepo;

    public List<Theme> getThemes() {
        return themeRepo.getThemes();
    }

    public Theme updateTheme(Theme theme) {
        return themeRepo.updateTheme(theme);
    }

    public List<Theme> addTheme(DTOTheme themeToBuild) {
        return themeRepo.addTheme(themeToBuild);
    }

    public Theme getThemeById(String id) {
        return themeRepo.getThemeById(id);
    }

    public List<Theme> deleteThemeById(String id) {
        return themeRepo.deleteThemeById(id);
    }
}
