import {create} from "zustand";

type State = {
    themeIndex: number,
    decrementThemeIndex: (themeLength: number) => void,
    incrementThemeIndex: (themeLength: number) => void,
}

export const useStore = create<State>((set) => ({
    // STORE START
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
}))
