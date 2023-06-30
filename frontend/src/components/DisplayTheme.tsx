import {Theme} from "../utils/types.ts"
import SeasonToggle from "./SeasonToggle.tsx"
import {useState} from "react";

type Props = {
    theme: Theme
}


export default function DisplayTheme({theme}: Props) {

    const [season, setSeason] = useState<string | null>('summer');

    function getCurrentSeasonImageUrl(theme: Theme, season: string | null): string {
        switch (season) {
            case "spring":
                return theme.springUrl;
            case "summer":
                return theme.summerUrl;
            case "autumn":
                return theme.autumnUrl;
            case "winter":
                return theme.winterUrl;
            default:
                return theme.summerUrl;
        }
    }

    return (
        <>
        <img width="200px" height="200px" src={getCurrentSeasonImageUrl(theme, season)} alt="Theme image"/>
        <SeasonToggle season={season} setSeason={setSeason} />
    </>
    )

}