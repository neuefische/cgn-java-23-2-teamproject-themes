import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from "react";
import {Theme} from "../utils/types.ts"
import {useFetch} from "../hooks/useFetch.ts";

type Props = {
    season: string,
    setSeason: React.Dispatch<React.SetStateAction<string>>,
    theme: Theme
}

export default function ToggleButtons({season, setSeason, theme}: Props) {

    const changeTheme = useFetch(state => state.changeTheme);

    const handleSeason = (
        _event: React.MouseEvent<HTMLElement, MouseEvent>,
        newSeason: string,
    ) => {
        setSeason(newSeason);
        theme.seasonStatus = newSeason;
        changeTheme(theme);


    };

    return (
        <ToggleButtonGroup
            value={season}
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
