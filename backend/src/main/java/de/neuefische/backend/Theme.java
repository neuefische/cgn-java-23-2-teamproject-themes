package de.neuefische.backend;

public record Theme(String id, String name, String springUrl, String summerUrl, String autumnUrl, String winterUrl, SeasonStatus seasonStatus)
{
}
