
import LoginPage from "./pages/LoginPage.tsx";
import {FormEvent, useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes, useNavigate, Navigate} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes.tsx";
import Home from "./pages/Home.tsx";
import GlobalStyle from "./GlobalStyle.tsx";
import Gallery from "./pages/Gallery.tsx";
import AddTheme from "./pages/AddTheme.tsx";
import Navigation from "./components/Navigation.tsx";
import {useFetch} from "./hooks/useFetch.ts";
import EditTheme from "./pages/EditTheme.tsx";

function App() {
    const [user, setUser] = useState<string>();

    const navigate = useNavigate();
    const themes = useFetch((state) => state.themes);
    const fetchThemes = useFetch((state) => state.fetchThemes);

    useEffect(() => {
        fetchThemes();
    }, [fetchThemes]);

    useEffect(() => {
        me();
    }, [])

    if (themes.length === 0) {
        return null;
    }

    function handleLogin(event: FormEvent, userName: string, password: string) {
        event.preventDefault();
        axios.post("/api/user/login", null, {
            auth: {
                username: userName,
                password: password
            }
        })
            .then(response => {
                setUser(response.data)
                navigate("/")
            })
    }

    function me() {
        axios.get("/api/user/me")
            .then(response => setUser(response.data))
    }

    return (
        <>
            <GlobalStyle/>
            <h1 style={{ position:"absolute", right:30, top:-10}}>{user}</h1>
            <Routes>

                <Route element={<ProtectedRoutes user={user}/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/themes" element={<Gallery/>}/>
                    <Route path="/add-theme" element={<AddTheme/>}/>
                    <Route path="/edit-theme/:id" element={<EditTheme/>}/>
                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Route>

                <Route path="/login" element={<LoginPage onLogin={handleLogin}/>}/>

            </Routes>
            <Navigation/>
        </>
    )
}

export default App
