import { create } from "zustand";
import { ThemeWithoutId, Theme } from "../utils/types.ts";
import axios from "axios";

type State = {
    themes: Theme[];
    fetchThemes: () => void;
    deleteTheme: (id: string) => void;
    addTheme: (requestBody: ThemeWithoutId) => void;
    putTheme: (requestBody: Theme) => void;
    getThemeById: (id: string | undefined) => Theme;

    themeIndex: number,
    decrementThemeIndex: (themeLength: number) => void,
    incrementThemeIndex: (themeLength: number) => void,
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

    getThemeById: (id: string | undefined) => {
        if (!id) {
            throw new Error("No id provided");
        }
        const { themes } = get();
        const theme = themes.find((theme) => theme.id === id);
        if (!theme) {
            throw new Error(`No theme with id ${id} found`);
        }
        return theme;
    },

    themeIndex: 0,

    decrementThemeIndex: (themeLength) =>
        set((state) => ({
            themeIndex: (state.themeIndex === 0) ? (themeLength - 1) : (state.themeIndex - 1)
        })),

    incrementThemeIndex: (themeLength) =>
        set((state) => ({
            themeIndex: (state.themeIndex === (themeLength - 1)) ? 0 : (state.themeIndex + 1)
        }))

    // STORE END
}));
