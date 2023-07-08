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
                <SelectionContainer value="SPRING" seasonStatus={theme.seasonStatus}>
                🌸
                </SelectionContainer>
            </ToggleButton>
            <ToggleButton value="SUMMER" style={{width:57}}>
            <SelectionContainer value="SUMMER" seasonStatus={theme.seasonStatus}>
                ☀️
            </SelectionContainer>
            </ToggleButton>
            <ToggleButton value="AUTUMN" style={{width:57}}>
                <SelectionContainer value="AUTUMN" seasonStatus={theme.seasonStatus}>
                🍁
                </SelectionContainer>
            </ToggleButton>
            <ToggleButton value="WINTER" style={{width:57}}>
                <SelectionContainer value="WINTER" seasonStatus={theme.seasonStatus}>
                ❄️
                </SelectionContainer>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

const SelectionContainer = styled.div<{ value: string; seasonStatus: string }>`
  transform: scale(${({ value, seasonStatus }) =>
          value === seasonStatus ? 1.85 : 1.2}) translateX(0.5px);
`;