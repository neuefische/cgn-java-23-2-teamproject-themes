import styled from "styled-components";
import {Theme} from "../utils/types.ts";
import {useFetch} from "../hooks/useFetch.ts";

type Props = {
    theme: Theme
}

export default function DeleteTheme({theme}: Props){

    const deleteTheme = useFetch((state) => state.deleteTheme);

    return <DeleteButton onClick={()=>deleteTheme(theme.id)}>DELETE THEME</DeleteButton>
}

const DeleteButton = styled.button`
  background: #dc143c;
  
  &:hover {
    background: #ff0000;
  }
`;
