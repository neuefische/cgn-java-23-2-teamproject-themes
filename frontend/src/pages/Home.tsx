import DisplayTheme from "../components/DisplayTheme.tsx";
import {useFetch} from "../hooks/useFetch.ts";
import styled from "styled-components";
import {getSeasonMainColor} from "../utils/utils.ts";
import Header from "../components/Header.tsx";

function Home() {

    const themes = useFetch((state) => state.themes);
    const themeIndex = useFetch(state => state.themeIndex);
    const currentTheme = themes[themeIndex];

    return (
        <StyledBody $seasonstatus={currentTheme.seasonStatus}>
            <Header/>
            <Main>
                <DisplayTheme key={currentTheme.id} currentTheme={currentTheme}/>
            </Main>
        </StyledBody>
    );
}

export default Home;

type StyledProps = {
    $seasonstatus: string
}

const StyledBody = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  height: 100vh;
  background: ${({$seasonstatus}) => getSeasonMainColor($seasonstatus)};
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

