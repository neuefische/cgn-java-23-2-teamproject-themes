import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from "react";
import axios from "axios";
import {Theme} from "../utils/types.ts"

type Props = {
    season: string,
    setSeason: React.Dispatch<React.SetStateAction<string>>,
    theme: Theme
}

export default function ToggleButtons({season, setSeason, theme}: Props) {


    const handleSeason = (
        _event: React.MouseEvent<HTMLElement, MouseEvent>,
        newSeason: string,
    ) => {
        setSeason(newSeason);
        theme.seasonStatus = newSeason;
        axios.put("/api/theme", theme)
            .then((res) => res.data)
            .catch((err) => {
                console.error(err);
            })


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
