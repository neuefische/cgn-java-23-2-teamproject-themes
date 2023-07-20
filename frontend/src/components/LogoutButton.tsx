import axios from "axios";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useFetch} from "../hooks/useFetch.ts";

function LogoutButton() {

    const navigate = useNavigate();
    const me = useFetch((state) => state.me);

    function handleLogout() {
        axios.post("/api/user/logout")
            .catch(console.error)
            .then(() => me())
            .then(() => navigate("/login"));
    }

    return (
        <Button onClick={handleLogout}>LOGOUT</Button>
    );
}

export default LogoutButton;

const Button = styled.button`
  width: 66px;
  height: 26px;
  background: tomato;
  border-radius: 5px;
  border-color: lightcoral;
  color: white;
  font-family: var(--font2);
  font-size: 13px;

  position: absolute;
  right: 26px;
  top: 18px;


`;
