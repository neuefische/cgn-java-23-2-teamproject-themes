import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useFetch} from "../hooks/useFetch.ts";
import Header from "../components/Header.tsx";
import styled from "styled-components";

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

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        login(userName, password, navigate);
    }

    return (
        <>
            <Header/>
            <StyledForm onSubmit={handleSubmit}>
                <InputField value={userName} onChange={handleUserNameInput} type="text" name="userName"
                            placeholder="username"/>

                <InputField value={password} onChange={handlePasswordInput} type="password" name="password"
                            placeholder="password"/>

                <LoginPageButton type="submit">LOGIN</LoginPageButton>
                <StyledSpan>OR</StyledSpan>
                <LoginPageButton type="button" onClick={() => navigate("/register")}>REGISTER</LoginPageButton>
            </StyledForm>
        </>
    );
}

const StyledSpan = styled.span`
  font-family: var(--font2);
  font-size: 28px;
`;


export const LoginPageButton = styled.button`
  cursor: pointer;
  width: 130px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #000;
  background: #D9D9D9;
  box-shadow: 2px 4px 2px 0 rgba(0, 0, 0, 0.25);
  font-family: var(--font1);
  font-size: 20px;

  &:hover {
    background: lightgray;
  }
`;

export const InputField = styled.input`
  width: 240px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #000;
  background: #D9D9D9;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25) inset;
  font-family: var(--font1);
  font-size: 20px;
  text-align: center;

`;

const StyledForm = styled.form`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;
