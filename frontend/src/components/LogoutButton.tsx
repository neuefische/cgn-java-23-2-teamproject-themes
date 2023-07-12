import axios from "axios";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

function LogoutButton() {

    const navigate = useNavigate();

    function handleLogout() {
        axios.post("/api/user/logout")
            .catch(console.error)
            .then(() => navigate("/login"));
    }

    return (
        <Button onClick={handleLogout}>LOGOUT</Button>
    );
}

export default LogoutButton;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background: crimson;
  border-radius: 10px;
  color: white;
  font-family: var(--font2);
  
  position: absolute;
  left: 30px;
    top: 30px;
  
  
`;