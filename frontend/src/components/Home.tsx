import {useEffect} from "react";
import DisplayTheme from "./DisplayTheme.tsx";
import {useFetch} from "../hooks/useFetch.ts";
import Navigation from "./Navigation.tsx";
import styled from "styled-components";
import {useStore} from "../hooks/useStore.ts";
import {getSeasonMainColor, getSeasonAccentColor} from "../utils/utils.ts";

function Home() {

    const themes = useFetch((state) => state.themes);
    const fetchThemes = useFetch((state) => state.fetchThemes);
    const themeIndex = useStore(state => state.themeIndex);

    useEffect(() => {
        fetchThemes();
    }, [fetchThemes]);

    if (themes.length === 0) {
        return null;
    }
    return (
        <StyledBody seasonStatus={themes[themeIndex].seasonStatus}>
            <Header>
                <Title>THEMES</Title>
            </Header>

            <Main>
                <DisplayTheme key={themeIndex + "theme"} themeIndex={themeIndex}/>
            </Main>

            <Footer seasonStatus={themes[themeIndex].seasonStatus}>
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

const Header = styled.header``;

const Title = styled.h1`
  font-family: var(--font2);
  display: flex;
  justify-content: center;
  color: var(--color1);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vh;
`;

const Footer = styled.footer<StyledProps>`
  justify-self: flex-end;
  background: ${({seasonStatus}) => getSeasonAccentColor(seasonStatus)};
`;