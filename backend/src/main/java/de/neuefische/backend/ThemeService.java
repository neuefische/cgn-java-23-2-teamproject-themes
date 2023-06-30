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

    public Theme updateThemeById(String id, Theme theme) {
        return themeRepo.updateThemeById(id, theme);
    }

}
