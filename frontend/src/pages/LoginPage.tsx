import { FormEvent, useState } from "react";
import {useNavigate} from "react-router-dom";
import {useFetch} from "../hooks/useFetch.ts";
import Header from "../components/Header.tsx";

export default function LoginPage() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const login = useFetch((state) => state.login);

    function handleUserNameInput(event: FormEvent<HTMLInputElement>) {
        setUserName(event.currentTarget.value);
    }

    function handlePasswordInput(event: FormEvent<HTMLInputElement>) {
        setPassword(event.currentTarget.value);
    }

    return (
        <>
            <Header/>
            <form onSubmit={(event) => login(event, userName, password, navigate)}
                  style={{width: "70%", display: "flex", flexDirection:"column", gap:10, alignItems:"center", justifyContent:"center"}}>
                <label>
                    Username:
                    <input value={userName} onChange={handleUserNameInput} type="text" name="userName" placeholder="username"/>
                </label>
                <label>
                    Password:
                    <input value={password} onChange={handlePasswordInput} type="password" name="password" placeholder="password"/>
                </label>
                <button type="submit">LOGIN</button>
                <span style={{fontFamily: "var(--font2)"}}>OR</span>
                <button type="button" onClick={() => navigate("/register")}>REGISTER</button>
            </form>

        </>
    );
}