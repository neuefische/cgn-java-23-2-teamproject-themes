import {Theme} from "../utils/types.ts"
import SeasonToggle from "./SeasonToggle.tsx"
import styled from "styled-components";
import PrevNextButtons from "./PrevNextButtons.tsx";
import {getCurrentSeasonImageUrl} from "../utils/utils.ts";

type Props = {
    currentTheme: Theme
}

export default function DisplayTheme({currentTheme}: Props) {

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
  gap: 3.9vh;
  align-items: center;
`;

const Img=styled.img`
  width: 320px;
  height: 320px;
  border-radius: 5px;
  box-shadow: var(--shadow1);
`;
