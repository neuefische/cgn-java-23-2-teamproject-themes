package de.neuefische.backend;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
public class Theme {

    private String id;
    private String name;
    private String springUrl;
    private String summerUrl;
    private String autumnUrl;
    private String winterUrl;
}
