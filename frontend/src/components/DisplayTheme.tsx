import {Theme} from "../utils/types.ts"
import SeasonToggle from "./SeasonToggle.tsx"
import {useState} from "react";
import axios from "axios";
import styled from "styled-components";

type Props = {
    theme: Theme
    setThemes: (ThemeList:Theme[]) => void
}

export default function DisplayTheme({theme, setThemes}: Props) {

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


    function handleDelete(): void {
        axios.delete(`/api/theme/${theme.id}`)
            .then(response => response.data)
            .catch(console.error)
            .then((data) => {
                setThemes(data);
            });
    }

    return (
        <ThemeContainer>
            <img width="200px" height="200px" src={getCurrentSeasonImageUrl(theme, season)} alt="Theme image"/>
            <SeasonToggle season={season} setSeason={setSeason} theme={theme}/>
            <DeleteButton onClick={handleDelete}>DELETE THEME</DeleteButton>
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
  background: crimson;

  &:hover {
    background: red;
  }
`;
