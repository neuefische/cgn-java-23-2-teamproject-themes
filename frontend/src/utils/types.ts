export type Theme = {
    id: string,
    name: string,
    springUrl: string,
    summerUrl: string,
    autumnUrl: string,
    winterUrl: string,
    seasonStatus: string,
}

export type ThemeWithoutId = {
    name: string,
    springUrl: string,
    summerUrl: string,
    autumnUrl: string,
    winterUrl: string,
    seasonStatus: string,
}
