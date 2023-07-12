import { FormEvent, useState } from "react";
import {useNavigate} from "react-router-dom";
import {useFetch} from "../hooks/useFetch.ts";

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
            <h2>Login</h2>
            <form onSubmit={(event) => login(event, userName, password, navigate)}>
                <label>
                    Username:
                    <input value={userName} onChange={handleUserNameInput} type="text" name="userName" placeholder="username"/>
                </label>
                <label>
                    Password:
                    <input value={password} onChange={handlePasswordInput} type="password" name="password" placeholder="password"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}