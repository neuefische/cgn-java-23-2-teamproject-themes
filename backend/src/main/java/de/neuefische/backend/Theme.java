package de.neuefische.backend;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

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

        Instant created) {
}
