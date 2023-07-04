import { create } from "zustand";
import {DtoTheme, Theme} from "../utils/types.ts";
import axios from "axios";

type State = {
    themes: Theme[],
    fetchThemes: () => void,
    deleteTheme: (id: string) => void,
    addTheme: (requestBody: DtoTheme) => void,
    changeTheme: (requestBody: Theme) => void,
}

export const useFetch = create<State>((set, get)=> ({
    // STORE START
    themes: [],

    fetchThemes: () => {
        axios.get("/api/theme")
            .then((res) => res.data)
            .catch((err) => {
                console.error(err);
            })
            .then((data) => set({themes: data}))
    },

    deleteTheme: (id) => {
        const {fetchThemes} = get();
        axios.delete(`/api/theme/${id}`)
            .catch(console.error)
            .then(fetchThemes);
    },

    addTheme: (requestBody) => {
        const {fetchThemes} = get();
        axios.post("/api/theme", requestBody)
            .catch(console.error)
            .then(fetchThemes);
    },

    changeTheme: (requestBody) => {
        axios.put("/api/theme", requestBody)
            .catch((err) => {
                console.error(err);
            })
    }





    // STORE END
}) )