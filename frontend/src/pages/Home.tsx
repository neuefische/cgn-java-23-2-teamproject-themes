import DisplayTheme from "../components/DisplayTheme.tsx";
import {useFetch} from "../hooks/useFetch.ts";
import styled from "styled-components";
import {getSeasonMainColor} from "../utils/utils.ts";
import Header from "../components/Header.tsx";
import {Navigate} from "react-router-dom";

function Home() {

    const themes = useFetch((state) => state.themes);
    const isLoading = useFetch(state => state.isLoading)
    const themeIndex = useFetch(state => state.themeIndex);
    const currentTheme = themes[themeIndex];

    if (isLoading) {
        return "loading ...";
    }

    if (!currentTheme) {
        return <Navigate to={"/add-theme"}/>;
    }

    return (
        <StyledBody $seasonstatus={currentTheme.seasonStatus}>
            <Header/>
            <Main>
                <DisplayTheme key={currentTheme.id} currentTheme={currentTheme}/>
            </Main>
        </StyledBody>)
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
