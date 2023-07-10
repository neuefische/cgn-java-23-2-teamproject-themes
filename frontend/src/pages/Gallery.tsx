import {Theme} from "../utils/types.ts"
import styled from "styled-components";
import Header from "../components/Header.tsx";
import {useFetch} from "../hooks/useFetch.ts";
import ThemeCard from "../components/ThemeCard.tsx";


export default function Gallery() {

    const themes = useFetch((state) => state.themes);

    return (
        <>
            <Header/>
            <StyledMain>
                {themes.map((theme: Theme) =>
                    <ThemeCard key={theme.id} theme={theme}/>)}
                <div style={{height: "100px"}}/>
            </StyledMain>
        </>
    )
}

const StyledMain = styled.main`
  margin-top: 20px;
`;



