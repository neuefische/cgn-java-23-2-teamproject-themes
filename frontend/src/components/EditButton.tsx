import styled from "styled-components";
import { useNavigate } from "react-router-dom";


type Props = {
    themeId: string
}

export default function EditButton({ themeId }: Props) {

    const navigate = useNavigate();



    function handleClick() {
        navigate(`/edit-theme/${themeId}`);
    }

    return (
        <>
            <Button onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27px" height="27px" fill="var(--colorWhite)">
                    <title>pencil</title>
                    <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                </svg>
            </Button>
        </>
    )
}

const Button = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  border: none;
  background-color: var(--colorBlack);
  margin: 0;
  padding: 0;
  display: grid;
  place-items: center;
  cursor: pointer;



`;
