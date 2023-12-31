import styled from "styled-components";
import {useFetch} from "../hooks/useFetch.ts";
import {Theme} from "../utils/types.ts"
import {getSeasonAccentColor} from "../utils/utils.ts";

type Props = {
    theme: Theme
}

export default function PrevNextButtons({theme}: Props) {

    const themes = useFetch(state => state.themes);
    const incrementThemeIndex = useFetch(state => state.decrementThemeIndex);
    const decrementThemeIndex = useFetch(state => state.incrementThemeIndex);

    return (
        <PaginationButtons $seasonstatus={theme.seasonStatus}>
            <button onClick={() => incrementThemeIndex(themes.length)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--colorBlack)" width="25px"
                     height="25px">
                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
                </svg>
            </button>
            <ThemeName>{theme.name}</ThemeName>
            <button onClick={() => decrementThemeIndex(themes.length)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="--colorBlack" width="25px"
                     height="25px">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                </svg>
            </button>
        </PaginationButtons>
    );
}

type StyledProps = {
    $seasonstatus: string
}

const PaginationButtons = styled.div<StyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 320px;
  height: 50px;

  button {
    cursor: pointer;
    width: 70px;
    height: 50px;
    border: solid 1px var(--colorBlack);
    border-radius: 5px;
    background: ${({$seasonstatus}) => getSeasonAccentColor($seasonstatus)};
    box-shadow: var(--shadow1);

    svg {
      transform: scale(1.8);
    }
  }
`;

const ThemeName = styled.h2`
  font-family: var(--font2);
  color: var(--colorGrey);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 180px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
