import React from "react";
import axios from "axios";
import { DTOTheme } from "../utils/types.ts";

export default function AddTheme() {

    function postTheme(themeName: FormDataEntryValue) {
        const name: string = themeName.toString();
        const data: DTOTheme = {
            name: name,
            springUrl: "https://cdn.discordapp.com/attachments/1090325789939085312/1123893739421708328/00038-162447185.png",
            summerUrl: "https://cdn.discordapp.com/attachments/1090325789939085312/1123893755842412616/00001-918857782.png",
            autumnUrl: "https://cdn.discordapp.com/attachments/1090325789939085312/1123893768257540137/00043-3644440715.png",
            winterUrl: "https://cdn.discordapp.com/attachments/1090325789939085312/1123893783323488316/00006-1847996727.png",
            seasonStatus: "SPRING"
        };


        axios.post("/api/theme", data)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data.themeName);
        postTheme(data.themeName);
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add Theme</legend>
                <input name="themeName" />
                <button type="submit">Add</button>
            </fieldset>
        </form>
    </>)
}