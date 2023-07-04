import {Theme} from "../utils/types.ts"
import SeasonToggle from "./SeasonToggle.tsx"
import {useState} from "react";
import styled from "styled-components";
import {useFetch} from "../hooks/useFetch.ts";

type Props = {
    theme: Theme
}

export default function DisplayTheme({theme}: Props) {

    const [season, setSeason] = useState<string>(theme.seasonStatus);
    const deleteTheme = useFetch((state) => state.deleteTheme);

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
            <img width="200px" height="200px" src={getCurrentSeasonImageUrl(theme, season)} alt="Theme image"/>
            <SeasonToggle season={season} setSeason={setSeason} theme={theme}/>
            <DeleteButton onClick={deleteTheme(theme.id)}>DELETE THEME</DeleteButton>
        </ThemeContainer>
    )

}

const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

const DeleteButton = styled.button`
  background: #dc143c;

  &:hover {
    background: #ff0000;
  }
`;
