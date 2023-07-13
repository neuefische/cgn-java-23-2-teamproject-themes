package de.neuefische.backend;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/api")
@RestController
public class ThemeController {

    private final ThemeService themeService;

    @Autowired
    public ThemeController(ThemeService themeService) {

        this.themeService = themeService;
    }

    @GetMapping("/theme")
    public List<Theme> getThemes() {

        return this.themeService.getThemes();
    }

    @PostMapping("/theme")
    public Theme addTheme(@Valid @RequestBody ThemeWithoutId themeWithoutId) {
        return this.themeService.addTheme(themeWithoutId);
    }

    @PutMapping("/theme/{id}")
    public Theme updateTheme(@PathVariable String id,
                             @Valid @RequestBody ThemeWithoutId themeWithoutId) {

        return themeService.updateTheme(id, themeWithoutId);
    }

    @GetMapping("/theme/{id}")
    public Theme getThemeById(@PathVariable String id) {

        return themeService.getThemeById(id);
    }

    @DeleteMapping("/theme/{id}")
    public void deleteThemeById(@PathVariable String id) {

        themeService.deleteThemeById(id);
    }
}
