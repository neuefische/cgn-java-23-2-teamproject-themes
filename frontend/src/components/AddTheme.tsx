import React from "react";
import axios from "axios";
import {DtoTheme, Theme} from "../utils/types.ts";

type Props = {
    onModifyThemes: (ThemeList: Theme[]) => void;
}

const springDefaultUrl = "https://cdn.discordapp.com/attachments/1090325789939085312/1123893739421708328/00038-162447185.png"
const summerDefaultUrl = "https://cdn.discordapp.com/attachments/1090325789939085312/1123893755842412616/00001-918857782.png"
const autumnDefaultUrl = "https://cdn.discordapp.com/attachments/1090325789939085312/1123893768257540137/00043-3644440715.png"
const winterDefaultUrl = "https://cdn.discordapp.com/attachments/1090325789939085312/1123893783323488316/00006-1847996727.png"


export default function AddTheme({onModifyThemes}: Props) {

    function postTheme(theme: { [p: string]: FormDataEntryValue }) {

        let name = theme.name.toString();
        const springUrl = theme.springUrl.toString();
        const summerUrl = theme.summerUrl.toString();
        const autumnUrl = theme.autumnUrl.toString();
        const winterUrl = theme.winterUrl.toString();
        const seasonStatus = theme.seasonStatus.toString();

        if (name === "") {
            name = "Default Name";
        }

        const requestBody: DtoTheme = {
            name,
            springUrl,
            summerUrl,
            autumnUrl,
            winterUrl,
            seasonStatus
        };
        axios.post("/api/theme", requestBody)
            .then((response) => response.data)
            .catch(console.error)
            .then((data) => {
                onModifyThemes(data);
            });
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData: FormData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        postTheme(data);
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add Theme</legend>
                <label htmlFor="name">Name: </label>
                <input name="name" placeholder="Georgious Theme"/>
                <label htmlFor="springUrl">Spring Url: </label>
                <input type="url" name="springUrl" defaultValue={springDefaultUrl}/>
                <label htmlFor="summerUrl">Summer Url: </label>
                <input type="url" name="summerUrl" defaultValue={summerDefaultUrl}/>
                <label htmlFor="autumnUrl">Autumn Url: </label>
                <input type="url" name="autumnUrl" defaultValue={autumnDefaultUrl}/>
                <label htmlFor="winterUrl">Winter Url: </label>
                <input type="url" name="winterUrl" defaultValue={winterDefaultUrl}/>
                <label htmlFor="seasonStatus">Season Status: </label>
                <select name="seasonStatus">
                    <option value="SPRING">Spring</option>
                    <option value="SUMMER">Summer</option>
                    <option value="AUTUMN">Autumn</option>
                    <option value="WINTER">Winter</option>
                </select>
                <button type="submit"> Add</button>
            </fieldset>
        </form>
    </>)
}