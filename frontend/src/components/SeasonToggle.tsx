import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from "react";
import {Theme} from "../utils/types.ts"
import {useFetch} from "../hooks/useFetch.ts";
import styled from "styled-components";
import {getSeasonAccentColor} from "../utils/utils.ts";

type Props = {
    theme: Theme
}

export default function ToggleButtons({theme}: Props) {

    const putTheme = useFetch(state => state.putTheme);

    const handleSeason = (
        _event: React.MouseEvent<HTMLElement, MouseEvent>,
        newSeason: string,
    ) => {
        if (newSeason === null) {
            return;
        }

        theme.seasonStatus = newSeason;
        putTheme(theme);
    };

    return (
        <ToggleButtonGroup
            value={theme.seasonStatus}
            exclusive
            onChange={(event, value) => handleSeason(event, value)}
            aria-label="current season"
            style={{background:`${getSeasonAccentColor(theme.seasonStatus)}`, border: "1px solid var(--colorBlack)", boxShadow:"var(--shadow1)"}}
        >

            <ToggleButton value="SPRING" style={{width:57}}>
                <SelectionContainer value="SPRING" $seasonstatus={theme.seasonStatus}>
                🌸
                </SelectionContainer>
            </ToggleButton>
            <ToggleButton value="SUMMER" style={{width:57}}>
            <SelectionContainer value="SUMMER" $seasonstatus={theme.seasonStatus}>
                ☀️
            </SelectionContainer>
            </ToggleButton>
            <ToggleButton value="AUTUMN" style={{width:57}}>
                <SelectionContainer value="AUTUMN" $seasonstatus={theme.seasonStatus}>
                🍁
                </SelectionContainer>
            </ToggleButton>
            <ToggleButton value="WINTER" style={{width:57}}>
                <SelectionContainer value="WINTER" $seasonstatus={theme.seasonStatus}>
                ❄️
                </SelectionContainer>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

type StyledProps ={
    value: string;
    $seasonstatus: string;
}

const SelectionContainer = styled.div<StyledProps>`
  transform: scale(${({ value, $seasonstatus }) =>
          value === $seasonstatus ? 2 : 1.6}) translateX(0.5px);
`;
