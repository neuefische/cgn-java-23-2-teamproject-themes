package de.neuefische.backend;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ThemeService {

    private final ThemeRepo themeRepo;

    private final IdService idService;


    public List<Theme> getThemes() {
        return themeRepo.findAll();
    }

    public Theme updateTheme(Theme theme) {
        return themeRepo.save(theme);
    }

    public Theme addTheme(DTOTheme themeToBuild) {

        Theme themeToSave = new Theme(
                idService.createId(),
                themeToBuild.name(),
                themeToBuild.springUrl(),
                themeToBuild.summerUrl(),
                themeToBuild.autumnUrl(),
                themeToBuild.winterUrl(),
                themeToBuild.seasonStatus());
        return this.themeRepo.save(themeToSave);
    }

    public Theme getThemeById(String id) {
        return themeRepo.findById(id).orElseThrow();
    }

    public void deleteThemeById(String id) {
        themeRepo.deleteById(id);
    }
}
