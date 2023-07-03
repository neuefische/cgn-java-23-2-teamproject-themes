package de.neuefische.backend;

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
    public List<Theme> getThemes(){
        return this.themeService.getThemes();
    }

    @PostMapping("/theme")
    public List<Theme> addTheme(@RequestBody DTOTheme themeToBuild){
        return this.themeService.addTheme(themeToBuild);
    }

    @PutMapping("/theme")
    public Theme changeSeason(@RequestBody Theme theme) {
        return themeService.updateTheme(theme);
    }

    @GetMapping("/theme/{id}")
    public Theme getThemeById(@PathVariable String id){

        return themeService.getThemeById(id);
    }
}
