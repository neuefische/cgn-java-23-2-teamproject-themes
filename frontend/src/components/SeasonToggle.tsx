
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from "react";

export default function ToggleButtons(props: any) {

    const {alignment, setAlignment} = props;
    const handleAlignment = (
        event: React.MouseEvent<HTMLElement, MouseEvent>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={(event, value)=>handleAlignment(event, value)}
            aria-label="text alignment"
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