import './App.css'
import Home from "./components/Home.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import {FormEvent, useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes, useNavigate} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes.tsx";


function App() {
    const [user, setUser] = useState<string>();

    const navigate = useNavigate();


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

    useEffect(() => {
        me();
    }, [])


    return (
        <>
            <h1>{user}</h1>
            <Routes>

                <Route element={<ProtectedRoutes user={user}/>}>
                    <Route path="/" element={<Home />}/>
                </Route>

                <Route path="/login" element={<LoginPage onLogin={handleLogin}/>}/>

            </Routes>

        </>
    )
}

export default App
