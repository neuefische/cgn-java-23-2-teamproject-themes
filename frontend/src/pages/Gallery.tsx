import {Theme} from "../utils/types.ts"
import {getCurrentSeasonImageUrl, getSeasonMainColor} from "../utils/utils.ts";
import styled from "styled-components";
import Header from "../components/Header.tsx";

import {useFetch} from "../hooks/useFetch.ts";

export default function Gallery() {

    const themes = useFetch((state) => state.themes);

    return (
        <>
            <Header/>
            <StyledMain>
                {themes.map((theme: Theme) =>
                    <ThemeCard key={theme.id}>
                        <ThemeContainer seasonstatus={theme.seasonStatus}>
                            <ThemeName>{theme.name}</ThemeName>
                            <Img src={getCurrentSeasonImageUrl(theme)} alt="theme"/>
                        </ThemeContainer>
                    </ThemeCard>)}
                <div style={{height: "100px"}}/>
            </StyledMain>
        </>
    )
}

const StyledMain = styled.main`
  margin-top: 20px;
`;

// refactor to own component
const ThemeCard = styled.div`
  display: grid;
  place-items: center;
  background: var(--colorWhite);
`;

type TypeThemeContainer = {
    seasonstatus: string;
}

const ThemeContainer = styled.div<TypeThemeContainer>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 360px;
  border-radius: 5px;
  background: ${({seasonstatus}) => getSeasonMainColor(seasonstatus)};
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