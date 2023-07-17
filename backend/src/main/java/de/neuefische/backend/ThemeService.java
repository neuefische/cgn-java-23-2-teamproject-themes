package de.neuefische.backend;

import de.neuefische.backend.exception.NoSuchThemeException;
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

    public Theme updateTheme(String id, ThemeWithoutId themeWithoutId) {
        Theme themeToSave = new Theme(id, themeWithoutId.name(),themeWithoutId.springUrl(),themeWithoutId.summerUrl(),themeWithoutId.autumnUrl(),themeWithoutId.winterUrl(),themeWithoutId.seasonStatus());
        return themeRepo.save(themeToSave);
    }

    public Theme addTheme(ThemeWithoutId themeWithoutId) {

        Theme themeToSave = new Theme(
                idService.createId(),
                themeWithoutId.name(),
                themeWithoutId.springUrl(),
                themeWithoutId.summerUrl(),
                themeWithoutId.autumnUrl(),
                themeWithoutId.winterUrl(),
                themeWithoutId.seasonStatus());
        return this.themeRepo.save(themeToSave);
    }

    public Theme getThemeById(String id) {
        return themeRepo.findById(id)
                .orElseThrow(() -> new NoSuchThemeException("No theme found with Id: " + id));
    }

    public void deleteThemeById(String id) {
            if(!themeRepo.existsById(id)) {
                throw new NoSuchThemeException("No theme found with Id: " + id);
            }
        themeRepo.deleteById(id);
    }
}
