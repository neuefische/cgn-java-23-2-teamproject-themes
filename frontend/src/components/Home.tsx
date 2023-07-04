import {useEffect} from "react";
import DisplayTheme from "./DisplayTheme.tsx";
import AddTheme from "./AddTheme.tsx";
import {useFetch} from "../hooks/useFetch.ts";

function Home() {

    const themes = useFetch((state) => state.themes);
    const fetchThemes = useFetch((state) => state.fetchThemes);

    useEffect(()=>{
        fetchThemes();
    }, [fetchThemes]);

    if (themes.length === 0) {
        return null;
    }

    return (
        <>
            {themes.map(theme => <DisplayTheme key={theme.id} theme={theme} />)}
            <AddTheme/>
        </>
    );
}

export default Home;
