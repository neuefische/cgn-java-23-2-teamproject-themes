import {useEffect} from "react";
import DisplayTheme from "./components/DisplayTheme.tsx";
import {useFetch} from "./hooks/useFetch.ts";
import Navigation from "./components/Navigation.tsx";
import styled from "styled-components";
import {useStore} from "./hooks/useStore.ts";
import {getSeasonMainColor, getSeasonAccentColor} from "./utils/utils.ts";

function Home() {

    const themes = useFetch((state) => state.themes);
    const fetchThemes = useFetch((state) => state.fetchThemes);
    const themeIndex = useStore(state => state.themeIndex);
    const currentTheme = themes[themeIndex];

    useEffect(() => {
        fetchThemes();
    }, [fetchThemes]);

    if (themes.length === 0) {
        return null;
    }
    return (
        <StyledBody seasonStatus={currentTheme.seasonStatus}>
            <Header>
                <Line>
                    <svg width="30" height="1" viewBox="0 0 30 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="30" y2="0.5" width="30px" height="1px" stroke="var(--colorBlack)"/>
                    </svg>
                </Line>
                <Title>
                    THEMES
                </Title>
            </Header>

            <Main>
                <DisplayTheme key={currentTheme.id} currentTheme={currentTheme}/>
            </Main>

            <Footer seasonStatus={currentTheme.seasonStatus}>
                <Navigation/>
            </Footer>
        </StyledBody>
    );
}

export default Home;

type StyledProps = {
    seasonStatus: string
}

const StyledBody = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  background: ${({seasonStatus}) => getSeasonMainColor(seasonStatus)};
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding-top: 19px;
`;


const Line = styled.div`
  display: grid;
  place-items: center;
  
`;

const Title = styled.h1`
  font-family: var(--font2);
  font-weight: 300;
  display: flex;
  justify-content: center;
  color: var(--colorBlack);
  margin: 0;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vh;
`;

const Footer = styled.footer<StyledProps>`
  display: grid;
  place-items: center;
  background: ${({seasonStatus}) => getSeasonAccentColor(seasonStatus)};
`;
