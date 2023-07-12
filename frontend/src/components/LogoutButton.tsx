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
  width: 70px;
  height: 30px;
  background: crimson;
  border-radius: 10px;
  color: white;
  font-family: var(--font2);

  position: absolute;
  left: 30px;
  top: 20px;


`;