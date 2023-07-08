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
            return "var(--springAccent)";
    }
}