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


    @PutMapping("/theme/{id}")
    public Theme changeSeason(@PathVariable String id, @RequestBody Theme theme) {
        return themeService.updateThemeById(id, theme);
    }


}
