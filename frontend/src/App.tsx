
import LoginPage from "./pages/LoginPage.tsx";
import {useEffect} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes.tsx";
import Home from "./pages/Home.tsx";
import GlobalStyle from "./GlobalStyle.tsx";
import Gallery from "./pages/Gallery.tsx";
import AddTheme from "./pages/AddTheme.tsx";
import Navigation from "./components/Navigation.tsx";
import {useFetch} from "./hooks/useFetch.ts";
import EditTheme from "./pages/EditTheme.tsx";

function App() {

    const themes = useFetch((state) => state.themes);
    const fetchThemes = useFetch((state) => state.fetchThemes);
    const me = useFetch((state) => state.me);
    const user = useFetch((state) => state.user);

    useEffect(() => {
        fetchThemes();
    }, [fetchThemes]);

    useEffect(() => {
        me();
    }, [])

    if (themes.length === 0) {
        return null;
    }

    return (        <>

            <GlobalStyle/>
            <h2 style={{ position:"absolute", right:30, top:-8}}>{user}</h2>
            <Routes>

                <Route element={<ProtectedRoutes user={user}/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/themes" element={<Gallery/>}/>
                    <Route path="/add-theme" element={<AddTheme/>}/>
                    <Route path="/edit-theme/:id" element={<EditTheme/>}/>
                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Route>

                <Route path="/login" element={<LoginPage/>}/>

            </Routes>
            <Navigation/>
        </>
    )
}

export default App
