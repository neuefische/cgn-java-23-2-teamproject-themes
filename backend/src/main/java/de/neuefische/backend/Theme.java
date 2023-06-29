package de.neuefische.backend;

import lombok.Data;

import java.util.UUID;


@Data
public class Theme {

    private final String id;
    private String springUrl;
    private String summerUrl;
    private String autumnUrl;
    private String winterUrl;

    public Theme (String springUrl, String summerUrl, String autumnUrl, String winterUrl) {
        this.id = UUID.randomUUID().toString().substring(0,8);
        this.springUrl = springUrl;
        this.summerUrl = summerUrl;
        this.autumnUrl = autumnUrl;
        this.winterUrl = winterUrl;
    }
}
