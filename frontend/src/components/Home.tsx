import {useEffect, useState} from "react";
import DisplayTheme from "./DisplayTheme.tsx";
import {useFetch} from "../hooks/useFetch.ts";

function Home() {

    const themes = useFetch((state) => state.themes);
    const fetchThemes = useFetch((state) => state.fetchThemes);

    const [currentThemeIndex, setCurrentThemeIndex] = useState<number>(0);

    useEffect(() => {
        fetchThemes();
    }, [fetchThemes]);

    function changeThemeIndex(chevronDirection: "increment" | "decrement") {
        switch (chevronDirection) {
            case "increment":
                if (currentThemeIndex === themes.length - 1) {
                    setCurrentThemeIndex(0);
                }
                else{
                    setCurrentThemeIndex(currentThemeIndex + 1);
                }
                return
            case "decrement":
                if (currentThemeIndex === 0) {
                    setCurrentThemeIndex(themes.length - 1);
                }
                else{
                    setCurrentThemeIndex(currentThemeIndex - 1);
                }
                return
        }
    }


    if (themes.length === 0) {
        return null;
    }
    return (
        <>
            {currentThemeIndex}
            <DisplayTheme key={currentThemeIndex + "theme"} theme={themes[currentThemeIndex]}/>

            <button onClick={() => changeThemeIndex("decrement")}>{"<"}</button>
            <button onClick={() => changeThemeIndex("increment")}>{">"}</button>
        </>
    );
}

export default Home;
