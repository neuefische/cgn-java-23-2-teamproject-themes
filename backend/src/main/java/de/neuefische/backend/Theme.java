package de.neuefische.backend;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("themes")
public record Theme(
        @Id
        String id,

        String name,

        String springUrl,

        String summerUrl,

        String autumnUrl,

        String winterUrl,
        SeasonStatus seasonStatus,

        String authorId
) {
}
