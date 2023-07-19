package de.neuefische.backend;

import de.neuefische.backend.exception.ErrorMessage;
import de.neuefische.backend.exception.NoSuchThemeException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RequestMapping("/api/theme")
@RestController
@RequiredArgsConstructor
public class ThemeController {

    private final ThemeService themeService;

    private final UserIdService userIdService;

    @GetMapping
    public List<Theme> getThemes() {
        return this.themeService.getThemes(userIdService.getCurrentUserId());
    }

    @PostMapping
    public Theme addTheme(@Valid @RequestBody ThemeWithoutId themeWithoutId) {
        return this.themeService.addTheme(themeWithoutId, userIdService.getCurrentUserId());
    }

    @PutMapping("/{id}")
    public Theme updateTheme(@PathVariable String id, @Valid @RequestBody ThemeWithoutId themeWithoutId) {
        return themeService.updateTheme(id, themeWithoutId, userIdService.getCurrentUserId());
    }


    @GetMapping("/{id}")
    public Theme getThemeById(@PathVariable String id) {

        return themeService.getThemeById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteThemeById(@PathVariable String id) {

        themeService.deleteThemeById(id);
    }

    @ExceptionHandler({NoSuchThemeException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorMessage handleNoSuchElementExceptions(NoSuchThemeException exception) {
        return new ErrorMessage(exception.getMessage());
    }


}
