import React from "react";
import {ThemeWithoutId} from "../utils/types.ts";
import {useFetch} from "../hooks/useFetch.ts";


const springDefaultUrl = "https://tinyurl.com/23ekjpst"
const summerDefaultUrl = "https://tinyurl.com/289sy8h3"
const autumnDefaultUrl = "https://tinyurl.com/29673hma"
const winterDefaultUrl = "https://tinyurl.com/2c9rhuvc"


export default function AddTheme() {

    const addTheme = useFetch(state => state.addTheme)

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

        const requestBody: ThemeWithoutId = {
            name,
            springUrl,
            summerUrl,
            autumnUrl,
            winterUrl,
            seasonStatus
        };

        addTheme(requestBody);

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
