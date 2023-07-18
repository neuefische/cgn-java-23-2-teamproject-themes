package de.neuefische.backend;

import de.neuefische.backend.exception.ErrorMessage;
import de.neuefische.backend.exception.NoSuchThemeException;
import de.neuefische.backend.security.MongoUserDetailsService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/api")
@RestController
public class ThemeController {

    private final ThemeService themeService;

    private final MongoUserDetailsService mongoUserDetailsService;

    @Autowired
    public ThemeController(ThemeService themeService, MongoUserDetailsService mongoUserDetailsService) {
        this.themeService = themeService;
        this.mongoUserDetailsService = mongoUserDetailsService;
    }

    private String getCurrentUserId() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return this.mongoUserDetailsService.getUserIdByUsername(username);
    }

    @GetMapping("/theme")
    public List<Theme> getThemes() {
        return this.themeService.getThemes(getCurrentUserId());
    }

    @PostMapping("/theme")
    public Theme addTheme(@Valid @RequestBody ThemeWithoutId themeWithoutId) {
        return this.themeService.addTheme(themeWithoutId, getCurrentUserId());
    }

    @PutMapping("/theme/{id}")
    public Theme updateTheme(@PathVariable String id, @Valid @RequestBody ThemeWithoutId themeWithoutId) {
        return themeService.updateTheme(id, themeWithoutId, getCurrentUserId());
    }


    @GetMapping("/theme/{id}")
    public Theme getThemeById(@PathVariable String id) {

        return themeService.getThemeById(id);
    }

    @DeleteMapping("/theme/{id}")
    public void deleteThemeById(@PathVariable String id) {

        themeService.deleteThemeById(id);
    }

    @ExceptionHandler({NoSuchThemeException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorMessage handleNoSuchElementExceptions(NoSuchThemeException exception) {
        return new ErrorMessage(exception.getMessage());
    }


}
