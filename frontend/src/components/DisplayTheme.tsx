import {Theme} from "../utils/types.ts"
import SeasonToggle from "./SeasonToggle.tsx"
import {useState} from "react";
import styled from "styled-components";
import PrevNextButtons from "./PrevNextButtons.tsx";

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
        <ThemeContainer>
            <Img src={getCurrentSeasonImageUrl(theme, season)} alt="Theme image"/>
            <SeasonToggle season={season} setSeason={setSeason} theme={theme}/>
            <PrevNextButtons theme={theme}/>
        </ThemeContainer>
    )

}

const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8vh;
  align-items: center;
`;

const Img=styled.img`
  width: 320px;
  height: 320px;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.50);
`;