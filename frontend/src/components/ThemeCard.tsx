import {Theme} from "../utils/types.ts";
import styled from "styled-components";
import {getCurrentSeasonImageUrl, getSeasonMainColor} from "../utils/utils.ts";
import EditButton from "./EditButton.tsx";
import DeleteButton from "./DeleteButton.tsx";


type Props = {
    theme: Theme
}
export default function ThemeCard({theme}: Props) {
    return (
        <>
            <Section>
                <ThemeContainer $seasonstatus={theme.seasonStatus}>
                    <ThemeName>{theme.name}</ThemeName>
                    <Img src={getCurrentSeasonImageUrl(theme)} alt="theme"/>
                    <StyledEditButton>
                        <EditButton/>
                    </StyledEditButton>
                    <StyledDeleteButton theme={theme}>
                        <DeleteButton theme={theme}/>
                    </StyledDeleteButton>
                </ThemeContainer>
            </Section>
        </>
    )
}

const StyledEditButton = styled.div`
  position: absolute;
  left: 38px;
  bottom: 42px;
`;

const StyledDeleteButton = styled.div`
  position: absolute;
  right: 38px;
  bottom: 42px;
`;

const Section = styled.section`
  display: grid;
  place-items: center;
  background: var(--colorWhite);
`;

type TypeThemeContainer = {
    $seasonstatus: string;
}

const ThemeContainer = styled.div<TypeThemeContainer>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 360px;
  border-radius: 5px;
  background: ${({$seasonstatus}) => getSeasonMainColor($seasonstatus)};
  margin: 12px;
`;

const ThemeName = styled.h2`
  font-family: var(--font2);
  color: var(--colorGrey);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 0;
`;

const Img = styled.img`

  width: 280px;
  height: 280px;
  border-radius: 5px;
  box-shadow: var(--shadow1);

`;