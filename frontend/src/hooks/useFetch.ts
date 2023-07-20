import { create } from "zustand";
import { ThemeWithoutId, Theme } from "../utils/types.ts";
import axios from "axios";
import {NavigateFunction} from "react-router-dom";
import {toast} from 'react-toastify';

type State = {
    themes: Theme[],
    fetchThemes: () => void,
    deleteTheme: (id: string) => void,
    postTheme: (requestBody: ThemeWithoutId) => void,
    putTheme: (requestBody: Theme) => void,
    getThemeById: (id: string | undefined) => Theme,
    isLoading: boolean,

    themeIndex: number,
    decrementThemeIndex: (themeLength: number) => void,
    incrementThemeIndex: (themeLength: number) => void,
    user: string,
    login: (userName: string, password: string, navigate: NavigateFunction) => void,
    me: () => void,
    register: (userName:string, password: string, repeatedPassword: string, setPassword: (password:string) => void, setRepeatedPassword: (repeatedPassword:string) => void, navigate: NavigateFunction) => void
};

export const useFetch = create<State>((set, get) => ({
    // STORE START
    themes: [],
    isLoading: true,

    fetchThemes: () => {
        set({isLoading: true})
        axios
            .get("/api/theme")
            .then((res) => res.data)
            .then((data) => {
                set({ themes: data });
            })
            .catch(console.error)
            .then(() => set({isLoading: false}));

    },

    deleteTheme: (id: string) => {
        const { fetchThemes } = get();
        axios
            .delete(`/api/theme/${id}`)
            .then(fetchThemes)
            .then(() => toast.success("Theme successfully deleted!"))
            .catch((error) => {
                toast.error("Something went wrong!");
                console.error(error);
            });
    },

    postTheme: (requestBody: ThemeWithoutId) => {
        const { fetchThemes } = get();
        axios
            .post("/api/theme", requestBody)
            .then(fetchThemes)
            .then(() => toast.success("Theme successfully added!"))
            .catch((error) => {
                toast.error("Something went wrong!");
                console.error(error);
            });

    },

    putTheme: (requestBody: Theme) => {
        const { fetchThemes } = get();
        const { id, ...themeWithoutId } = requestBody;
        axios
            .put(`/api/theme/${id}`, themeWithoutId)
            .then(fetchThemes)
            .then(() => toast.success("Theme successfully updated!"))
            .catch((error) => {
                toast.error("Something went wrong!");
                console.error(error);
            });
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
        })),

    user: "",

    login: (userName: string, password: string, navigate: NavigateFunction) => {
        axios.post("/api/user/login", null, {
            auth: {
                username: userName,
                password: password
            }
        })
            .then(response => {
                set({user:response.data})
                navigate("/")
            })
            .catch(console.error)
    },

    me: () => {
        axios.get("/api/user/me")
            .then(response => set({user:response.data}))
    },

    register: (userName:string, password: string, repeatedPassword: string, setPassword: (password:string) => void, setRepeatedPassword: (repeatedPassword:string) => void, navigate: NavigateFunction) => {
        const newUserData = {
            "username": `${userName}`,
            "password": `${password}`
        }

        if (password === repeatedPassword) {

            axios.post("/api/user/register", newUserData)
                .then(response => {
                    console.error(response)
                    navigate("/login")
                })
                .catch(console.error)

        } else {
            setPassword("");
            setRepeatedPassword("");
        }
},

    // STORE END
}));

