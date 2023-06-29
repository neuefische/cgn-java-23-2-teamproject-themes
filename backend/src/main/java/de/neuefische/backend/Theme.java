package de.neuefische.backend;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Theme {

    private String id;
    private String springUrl;
    private String summerUrl;
    private String autumnUrl;
    private String winterUrl;



}
