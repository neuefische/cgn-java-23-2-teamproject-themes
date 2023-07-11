import {Theme} from "./types.ts";

export function getSeasonMainColor(seasonStatus: string): string {
    switch (seasonStatus) {
        case 'SPRING':
            return "var(--springMain)";
        case 'SUMMER':
            return "var(--summerMain)";
        case 'AUTUMN':
            return "var(--autumnMain)";
        case 'WINTER':
            return "var(--winterMain)";
        default:
            return "var(--springMain)";
    }
}

export function getSeasonAccentColor(seasonStatus: string): string {
    switch (seasonStatus) {
        case 'SPRING':
            return "var(--springAccent)";
        case 'SUMMER':
            return "var(--summerAccent)";
        case 'AUTUMN':
            return "var(--autumnAccent)";
        case 'WINTER':
            return "var(--winterAccent)";
        default:
            return "var(--springMain)";
    }
}

export function getCurrentSeasonImageUrl(theme: Theme): string {
    const season = theme.seasonStatus;
    switch (season) {
        case "SPRING":
            return theme.springUrl;
        case "SUMMER":
            return theme.summerUrl;
        case "AUTUMN":
            return theme.autumnUrl;
        case "WINTER":
            return theme.winterUrl;
        default:
            return theme.summerUrl;
    }
}

