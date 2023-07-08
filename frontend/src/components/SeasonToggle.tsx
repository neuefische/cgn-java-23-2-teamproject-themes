import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from "react";
import {Theme} from "../utils/types.ts"
import {useFetch} from "../hooks/useFetch.ts";

type Props = {
    theme: Theme
}

export default function ToggleButtons({theme}: Props) {

    const putTheme = useFetch(state => state.putTheme);

    const handleSeason = (
        _event: React.MouseEvent<HTMLElement, MouseEvent>,
        newSeason: string,
    ) => {
        theme.seasonStatus = newSeason;
        putTheme(theme);
    };

    return (
        <ToggleButtonGroup
            value={theme.seasonStatus}
            exclusive
            onChange={(event, value) => handleSeason(event, value)}
            aria-label="current season"
        >
            <ToggleButton value="SPRING">
                🌸
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
