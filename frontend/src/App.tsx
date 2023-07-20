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
import RegisterPage from "./pages/RegisterPage.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const me = useFetch((state) => state.me);
    const user = useFetch((state) => state.user);
    const fetchThemes = useFetch(state => state.fetchThemes);

    useEffect(() => {
        me();
        fetchThemes();
    }, [me, fetchThemes])

    return (<>
            <GlobalStyle/>
            <ToastContainer/>
            <Routes>
                <Route element={<ProtectedRoutes user={user}/>}>

                    <>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/themes" element={<Gallery/>}/>
                        <Route path="/edit-theme/:id" element={<EditTheme/>}/>
                        <Route path="/add-theme" element={<AddTheme/>}/>
                        <Route path="/*" element={<Navigate to="/"/>}/>
                    </>
                </Route>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
            {user !== "anonymousUser" && <Navigation/>}

        </>
    )
}

export default App

