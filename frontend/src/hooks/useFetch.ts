import { create } from "zustand";
import { ThemeWithoutId, Theme } from "../utils/types.ts";
import axios from "axios";

type State = {
    themes: Theme[];
    fetchThemes: () => void;
    deleteTheme: (id: string) => void;
    addTheme: (requestBody: ThemeWithoutId) => void;
    putTheme: (requestBody: Theme) => void;
};

export const useFetch = create<State>((set, get) => ({
    // STORE START
    themes: [],

    fetchThemes: () => {
        axios
            .get("/api/theme")
            .then((res) => res.data)
            .then((data) => {
                set({ themes: data });
            })
            .catch(console.error);
    },

    deleteTheme: (id: string) => {
        const { fetchThemes } = get();
        axios
            .delete(`/api/theme/${id}`)
            .then(fetchThemes)
            .catch(console.error);
    },

    addTheme: (requestBody: ThemeWithoutId) => {
        const { fetchThemes } = get();
        axios
            .post("/api/theme", requestBody)
            .then(fetchThemes)
            .catch(console.error);
    },

    putTheme: (requestBody: Theme) => {
        const { fetchThemes } = get();
        const { id, ...themeWithoutId } = requestBody;
        axios
            .put(`/api/theme/${id}`, themeWithoutId)
            .then(fetchThemes)
            .catch(console.error);
    },

    // STORE END
}));
