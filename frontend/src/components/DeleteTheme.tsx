import styled from "styled-components";
import {Theme} from "../utils/types.ts";
import {useFetch} from "../hooks/useFetch.ts";

type Props = {
    theme: Theme
}

export default function DeleteTheme({theme}: Props) {

    const deleteTheme = useFetch((state) => state.deleteTheme);

    return (<DeleteButton onClick={() => deleteTheme(theme.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px" fill="red">
            <title>close-circle</title>
            <path
                d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"/>
        </svg>
    </DeleteButton>)
}

const DeleteButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  border: none;
  background-color: var(--colorBlack);
`;
