package de.neuefische.backend;


import lombok.Data;
import org.springframework.stereotype.Service;
import java.util.UUID;

import java.util.List;

@Service
@Data
public class ThemeService {


private final ThemeRepo themeRepo;

    public String createId(){
        return UUID.randomUUID().toString();
    }

    public List<Theme> getThemes() {
        return themeRepo.findAll();
    }

    public Theme updateTheme(Theme theme) {
        return themeRepo.save(theme);
    }

    public Theme addTheme(DTOTheme themeToBuild) {
        Theme themeToSave = new Theme(
                createId(),
                themeToBuild.name(),
                themeToBuild.springUrl(),
                themeToBuild.summerUrl(),
                themeToBuild.autumnUrl(),
                themeToBuild.winterUrl(),
                themeToBuild.seasonStatus());
        return themeRepo.save(themeToSave);

    }

    public Theme getThemeById(String id) {
        return themeRepo.findById(id).orElseThrow();
    }

    public void deleteThemeById(String id) {
        themeRepo.deleteById(id);
    }
}
