import {Theme} from "../utils/types.ts"
import SeasonToggle from "./SeasonToggle.tsx"
import {useState} from "react";

type Props = {
    theme: Theme
}


export default function DisplayTheme({theme}: Props) {

    const [alignment, setAlignment] = useState<string | null>('summer');

    function getCurrentSeasonImageUrl(theme: Theme, alignment: string | null): string {
        switch (alignment) {
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
        <img width="200px" height="200px" src={getCurrentSeasonImageUrl(theme, alignment)} alt="Theme image"/>
        <SeasonToggle alignment={alignment} setAlignment={setAlignment} />
    </>
    )

}