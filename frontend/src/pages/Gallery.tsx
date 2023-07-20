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
                {themes.length === 0 && (
                    <MessageContainer>
                    <StyledMessage>Gallery is empty,</StyledMessage>
                    <StyledMessage>please <a href={"/add-themes"}>add</a> a Theme </StyledMessage>
                    </MessageContainer>
                )}
                {themes.map((theme: Theme) =>
                    <ThemeCard key={theme.id} theme={theme}/>)}
                <div style={{height: "100px"}}/>
            </StyledMain>
        </>
    )
}

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 140px;
`;

const StyledMain = styled.main`
  margin-top: 20px`;
  
const StyledMessage = styled.h2`
  font-family: var(--font1);
  font-size: 20px;
`;


