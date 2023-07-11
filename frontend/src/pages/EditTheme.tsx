import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Header from "../components/Header";
import {TextField} from "@mui/material";
import React from "react";
import styled from "styled-components";
import {Theme} from "../utils/types.ts";

export default function EditTheme() {

    const urlParams = useParams();
    const getThemeById = useFetch(state => state.getThemeById);
    const currentTheme = getThemeById(urlParams.id);
    const putTheme = useFetch(state => state.putTheme);


    function putThemeHandler(theme: { [p: string]: FormDataEntryValue }, themeId: string) {
        let name = theme.name.toString();
        const id = themeId;

        if (name === "") {
            name = "Default Name";
        }

        const requestBody: Theme = {
            id,
            name,
            springUrl: theme.springUrl.toString(),
            summerUrl: theme.summerUrl.toString(),
            autumnUrl: theme.autumnUrl.toString(),
            winterUrl: theme.winterUrl.toString(),
            seasonStatus: theme.seasonStatus.toString()
        };

        try {
            putTheme(requestBody);
        }
        catch (error) {
            console.error(error);
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        putThemeHandler(data, currentTheme.id);
    }

    return (<StyledBody>
        <Header/>
        <StyledForm onSubmit={handleSubmit}>
            <TextField id="outlined-basic" name="name" label="Name" variant="outlined" defaultValue={currentTheme?.name}/>
            <StyledFieldset>
                <legend>Seasonal Pictures</legend>
                <UrlLabel htmlFor="springUrl">🌸 Spring Source: </UrlLabel>
                <input type="url" name="springUrl" defaultValue={currentTheme?.springUrl}/>
                <UrlLabel htmlFor="summerUrl">☀️ Summer Source: </UrlLabel>
                <input type="url" name="summerUrl" defaultValue={currentTheme?.summerUrl}/>
                <UrlLabel htmlFor="autumnUrl">🍁 Autumn Source: </UrlLabel>
                <input type="url" name="autumnUrl" defaultValue={currentTheme?.autumnUrl}/>
                <UrlLabel htmlFor="winterUrl">❄️ Winter Source: </UrlLabel>
                <input type="url" name="winterUrl" defaultValue={currentTheme?.winterUrl}/>
            </StyledFieldset>
            <Container>
                <SeasonStatusContainer>
                    <StatusLabel htmlFor="seasonStatus" >ACTIVE <br/> SEASON:</StatusLabel>
                    <select name="seasonStatus" defaultValue={currentTheme.seasonStatus}>
                        <option value="SPRING">Spring</option>
                        <option value="SUMMER">Summer</option>
                        <option value="AUTUMN">Autumn</option>
                        <option value="WINTER">Winter</option>
                    </select>
                </SeasonStatusContainer>
                <SubmitButton type="submit">SAVE</SubmitButton>
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
