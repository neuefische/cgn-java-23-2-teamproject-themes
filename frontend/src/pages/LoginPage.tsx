import { FormEvent, useState } from "react";


type Props = {
    onLogin: (event: FormEvent, userName: string, password: string) => void
}
export default function LoginPage({onLogin}: Props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleUserNameInput(event: FormEvent<HTMLInputElement>) {
        setUserName(event.currentTarget.value);
    }

    function handlePasswordInput(event: FormEvent<HTMLInputElement>) {
        setPassword(event.currentTarget.value);
    }

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={(event) => onLogin(event, userName, password)}>
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