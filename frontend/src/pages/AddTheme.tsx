import React, {useEffect} from "react";
import {ThemeWithoutId} from "../utils/types.ts";
import {useFetch} from "../hooks/useFetch.ts";
import styled from "styled-components";
import Header from "../components/Header.tsx";
import {TextField} from "@mui/material";

const springDefaultUrl = "https://cdn.discordapp.com/attachments/1090325789939085312/1123893739421708328/00038-162447185.png"
const summerDefaultUrl = "https://cdn.discordapp.com/attachments/1090325789939085312/1123893755842412616/00001-918857782.png"
const autumnDefaultUrl = "https://cdn.discordapp.com/attachments/1090325789939085312/1123893768257540137/00043-3644440715.png"
const winterDefaultUrl = "https://cdn.discordapp.com/attachments/1090325789939085312/1123893783323488316/00006-1847996727.png"

export default function AddTheme() {

    const postTheme = useFetch(state => state.postTheme);
    const fetchThemes = useFetch((state) => state.fetchThemes);

    useEffect(() => {
        fetchThemes();
    }, [fetchThemes]);

    function postThemeHandler(theme: { [p: string]: FormDataEntryValue }) {
        let name = theme.name.toString();

        if (name === "") {
            name = "Default Name";
        }

        const requestBody: ThemeWithoutId = {
            name,
            springUrl: theme.springUrl.toString(),
            summerUrl: theme.summerUrl.toString(),
            autumnUrl: theme.autumnUrl.toString(),
            winterUrl: theme.winterUrl.toString(),
            seasonStatus: theme.seasonStatus.toString()
        };

        postTheme(requestBody);

    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData: FormData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        postThemeHandler(data);
    }

    return (<StyledBody>
        <Header/>
        <StyledForm onSubmit={handleSubmit}>
            <TextField id="outlined-basic" name="name" label="Name" variant="outlined" />
            <StyledFieldset>
                <legend>Seasonal Pictures</legend>
                <UrlLabel htmlFor="springUrl">🌸 Spring Source: </UrlLabel>
                <input type="url" name="springUrl" defaultValue={springDefaultUrl}/>
                <UrlLabel htmlFor="summerUrl">☀️ Summer Source: </UrlLabel>
                <input type="url" name="summerUrl" defaultValue={summerDefaultUrl}/>
                <UrlLabel htmlFor="autumnUrl">🍁 Autumn Source: </UrlLabel>
                <input type="url" name="autumnUrl" defaultValue={autumnDefaultUrl}/>
                <UrlLabel htmlFor="winterUrl">❄️ Winter Source: </UrlLabel>
                <input type="url" name="winterUrl" defaultValue={winterDefaultUrl}/>
            </StyledFieldset>
            <Container>
            <SeasonStatusContainer>
                <StatusLabel htmlFor="seasonStatus" >ACTIVE <br/> SEASON:</StatusLabel>
                <select name="seasonStatus">
                    <option value="SPRING">Spring</option>
                    <option value="SUMMER">Summer</option>
                    <option value="AUTUMN">Autumn</option>
                    <option value="WINTER">Winter</option>
                </select>
            </SeasonStatusContainer>
                <SubmitButton type="submit">ADD</SubmitButton>
            </Container>

        </StyledForm>
    </StyledBody>)
}

const StyledBody = styled.div`
  max-height: 593px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding-bottom: 74px;

  height: 100vh;
`;

const StyledFieldset = styled.fieldset`
  padding: 2px 30px 23px 30px;

  display:flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1em;
`;

const StyledForm = styled.form`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.1em;
`;

const SeasonStatusContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
  gap: 20px;
`;

const UrlLabel = styled.label`
  font-family: var(--font1);
  transform: translateY(10px);
`;

const StatusLabel = styled.label`
  font-family: var(--font1);
`;

const SubmitButton = styled.button`
  width: 100px;
  font-family: var(--font2);
  font-size: larger;
  font-weight: bolder;
  
  background-color: aquamarine;
`;
