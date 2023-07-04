import {Theme} from "../utils/types.ts"
import SeasonToggle from "./SeasonToggle.tsx"
import {useState} from "react";

type Props = {
    theme: Theme
}


export default function DisplayTheme({theme}: Props) {

    const [season, setSeason] = useState<string>(theme.seasonStatus);

    function getCurrentSeasonImageUrl(theme: Theme, season: string): string {
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

    return (
        <>
        <img width="200px" height="200px" src={getCurrentSeasonImageUrl(theme, season)} alt="Theme image"/>
        <SeasonToggle season={season} setSeason={setSeason} theme={theme} />
    </>
    )

}