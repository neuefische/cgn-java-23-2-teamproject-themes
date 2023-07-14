import { FormEvent, useState } from "react";
import {useFetch} from "../hooks/useFetch.ts";
import {useNavigate} from "react-router-dom";
import Header from "../components/Header.tsx";


function RegisterPage() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const navigate = useNavigate();
    const register = useFetch((state) => state.register);

    function handleUserNameInput(event: FormEvent<HTMLInputElement>) {
        setUserName(event.currentTarget.value);
    }

    function handlePasswordInput(event: FormEvent<HTMLInputElement>) {
        setPassword(event.currentTarget.value);
    }

    function handleRepeatedPasswordInput(event: FormEvent<HTMLInputElement>){
        setRepeatedPassword(event.currentTarget.value);
    }

    return (
        <div>
            <Header/>
        <form onSubmit={(event) => {register(event, userName,password, repeatedPassword, setPassword, setRepeatedPassword, navigate)}}
              style={{width: "70%", display: "flex", flexDirection:"column", gap:10, alignItems:"center", justifyContent:"center"}}>
            <label>
                <input value={userName} onChange={handleUserNameInput} type="text" name="userName" placeholder="username"/>
            </label>
            <label>
                <input value={password} onChange={handlePasswordInput} type="password" name="password" placeholder="password"/>
            </label>
            <label>
                <input value={repeatedPassword} onChange={handleRepeatedPasswordInput} type="password" name="RepeatPassword" placeholder="RepeatPassword"/>
                <span>{password===repeatedPassword?"OK":"passwords do not match"}</span>
            </label>
            <div>
            <button type="button" onClick={()=>navigate("/login")}>back</button>
            <button type="submit">REGISTER</button>
            </div>

        </form>
        </div>
    );
}

export default RegisterPage;
