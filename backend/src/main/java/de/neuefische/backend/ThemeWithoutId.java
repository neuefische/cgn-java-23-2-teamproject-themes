package de.neuefische.backend;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record ThemeWithoutId(
        @NotBlank
        String name,

        @Pattern(regexp = "^https://.*\\.(jpg|png|gif)$",
                message = "Invalid URL")
        String springUrl,

        @Pattern(regexp = "^https://.*\\.(jpg|png|gif)$",
                message = "Invalid URL")
        String summerUrl,

        @Pattern(regexp = "^https://.*\\.(jpg|png|gif)$",
                message = "Invalid URL")
        String autumnUrl,

        @Pattern(regexp = "^https://.*\\.(jpg|png|gif)$",
                message = "Invalid URL")
        String winterUrl,


        SeasonStatus seasonStatus
) {
}
