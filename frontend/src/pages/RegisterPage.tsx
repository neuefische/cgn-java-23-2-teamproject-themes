import { FormEvent, useState } from "react";
import {useFetch} from "../hooks/useFetch.ts";
import {useNavigate} from "react-router-dom";
import Header from "../components/Header.tsx";
import styled from "styled-components";
import {InputField, LoginPageButton} from "./LoginPage.tsx";


function RegisterPage() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const navigate = useNavigate();
    const register = useFetch((state) => state.register);
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).{6,20}$/;
    function handleUserNameInput(event: FormEvent<HTMLInputElement>) {
        setUserName(event.currentTarget.value);
    }

    function handlePasswordInput(event: FormEvent<HTMLInputElement>) {
        setPassword(event.currentTarget.value);
    }

    function handleRepeatedPasswordInput(event: FormEvent<HTMLInputElement>){
        setRepeatedPassword(event.currentTarget.value);
    }

    function handleRegistration(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        register(userName,password, repeatedPassword, setPassword, setRepeatedPassword, navigate);
    }

    return (
        <div>
            <Header/>
        <StyledForm onSubmit={handleRegistration}>

            <div>
                <InputField value={userName} onChange={handleUserNameInput} type="text" name="userName" placeholder="username"
                style={{backgroundColor: userName.length >= 4 ? "lightgreen" : "tomato"}}/>
                <br/>
            <StyledSpan>at least 4 characters</StyledSpan>
        </div>
    <div>
                <InputField value={password} onChange={handlePasswordInput} type="password" name="password" placeholder="password"
                            style={{backgroundColor: regex.test(password) ? "lightgreen" : "tomato"}}
                />
        <br/>
        <StyledSpan>
                at least 6 characters,
                <br/>
                must contain numbers and letters
            </StyledSpan>
    </div>
                <InputField value={repeatedPassword} onChange={handleRepeatedPasswordInput} type="password" name="RepeatPassword" placeholder="repeat password"
                style={{backgroundColor: password===repeatedPassword?"lightgreen":"tomato"}}/>
            <div>
            <StyledLoginPageButton type="button" onClick={()=>navigate("/login")}>BACK</StyledLoginPageButton>
            <LoginPageButton type="submit">REGISTER</LoginPageButton>
            </div>

        </StyledForm>
        </div>
    );
}

export default RegisterPage;

const StyledForm = styled.form`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const StyledSpan = styled.span`
font-family: var(--font1);
`;

const StyledLoginPageButton = styled(LoginPageButton)`
width: 90px;
  margin-right: 22px;
  background-color: darkgrey;
`;
