
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from "react";

type Props = {
    season: string | null,
    setSeason: React.Dispatch<React.SetStateAction<string | null>>,
}

export default function ToggleButtons({season, setSeason}: Props) {

    const handleSeason = (
        _event: React.MouseEvent<HTMLElement, MouseEvent>,
        newSeason: string | null,
    ) => {
        setSeason(newSeason);
    };

    return (
        <ToggleButtonGroup
            value={season}
            exclusive
            onChange={(event, value)=>handleSeason(event, value)}
            aria-label="current season"
        >
            <ToggleButton value="spring" >
                🌸
            </ToggleButton>
            <ToggleButton value="summer" >
                ☀️
            </ToggleButton>
            <ToggleButton value="autumn" >
                🍁
            </ToggleButton>
            <ToggleButton value="winter">
                ❄️
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
