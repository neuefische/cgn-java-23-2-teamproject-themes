import {Theme} from "../utils/types.ts"
import SeasonToggle from "./SeasonToggle.tsx"
import styled from "styled-components";
import PrevNextButtons from "./PrevNextButtons.tsx";
import {useFetch} from "../hooks/useFetch.ts";

type Props = {
    themeIndex: number
}

export default function DisplayTheme({themeIndex}: Props) {

    const currentTheme: Theme = useFetch((state) => state.themes[themeIndex]);

    function getCurrentSeasonImageUrl(theme: Theme): string {
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


    return (
        <ThemeContainer>
            <Img src={getCurrentSeasonImageUrl(currentTheme)} alt="Theme image"/>
            <SeasonToggle theme={currentTheme}/>
            <PrevNextButtons theme={currentTheme}/>
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
  box-shadow: var(--shadow1);
`;