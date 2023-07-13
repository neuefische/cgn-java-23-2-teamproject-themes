package de.neuefische.backend;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("themes")
public record Theme(
        @Id
        String id,

        @NotBlank(message = "Name is mandatory")
        String name,

        @Pattern(regexp = "^https://.*\\.(jpg|png|gif|jpeg)$",
                message = "Invalid URL")
        String springUrl,

        @Pattern(regexp = "^https://.*\\.(jpg|png|gif|jpeg)$",
                message = "Invalid URL")
        String summerUrl,

        @Pattern(regexp = "^https://.*\\.(jpg|png|gif|jpeg)$",
                message = "Invalid URL")
        String autumnUrl,

        @Pattern(regexp = "^https://.*\\.(jpg|png|gif|jpeg)$",
                message = "Invalid URL")
        String winterUrl,
        SeasonStatus seasonStatus) {
}
