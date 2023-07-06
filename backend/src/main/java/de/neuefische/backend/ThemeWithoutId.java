package de.neuefische.backend;

public record ThemeWithoutId(String name, String springUrl, String summerUrl, String autumnUrl, String winterUrl, SeasonStatus seasonStatus) {
}
