import Home from "./pages/Home.tsx";
import GlobalStyle from "./GlobalStyle.tsx";
import {Routes, Route} from "react-router-dom";
import Gallery from "./pages/Gallery.tsx";
import AddTheme from "./pages/AddTheme.tsx";
import Navigation from "./components/Navigation.tsx";
import {useFetch} from "./hooks/useFetch.ts";
import {useEffect} from "react";

export default function App() {

    const themes = useFetch((state) => state.themes);
    const fetchThemes = useFetch((state) => state.fetchThemes);

    useEffect(() => {
        fetchThemes();
    }, [fetchThemes]);

    if (themes.length === 0) {
        return null;
    }

    return (
        <>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/themes" element={<Gallery/>}/>
                <Route path="/add-theme" element={<AddTheme/>}/>
            </Routes>
            <Navigation/>
        </>
    )
}

