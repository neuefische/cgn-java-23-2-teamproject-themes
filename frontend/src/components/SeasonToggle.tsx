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
            style={{background:`${getSeasonAccentColor(theme.seasonStatus)}`}}
        >

            <ToggleButton value="SPRING">
                <SelectionContainer value="SPRING" seasonStatus={theme.seasonStatus}>
                🌸
                </SelectionContainer>
            </ToggleButton>
            <ToggleButton value="SUMMER">
                ☀️
            </ToggleButton>
            <ToggleButton value="AUTUMN">
                🍁
            </ToggleButton>
            <ToggleButton value="WINTER">
                ❄️
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

const SelectionContainer = styled.div<{ value: string; seasonStatus: string }>`
  transform: scale(1.85);
  border-radius: 8px;
  background: ${({ value, seasonStatus }) =>
          value === seasonStatus ? "rgba(128, 128, 128, 0.8)" : null};
`;