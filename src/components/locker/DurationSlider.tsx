import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FormControl, FormLabel, Tooltip } from '@mui/material';

function valuetext(value: number) {
    return `${value}°C`;
}

const marks = [
    {
        value: 3,
        label: '3',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 30,
        label: '30',
    },
    {
        value: 48,
        label: '48',
    },
];
interface DurationSliderProps {
    lockDuration: number
    setLockDuration: (d: number) => void
}
export default function DurationSlider({ lockDuration, setLockDuration }: DurationSliderProps) {
    return (
        <Box sx={{ width: "100%", mt: 5 }}>
            <FormControl fullWidth>
                <FormLabel htmlFor="durationSlider">Lock duration (months)</FormLabel>
                    <Slider
                        id="durationSlider"
                        aria-label="Steps"
                        defaultValue={3}
                        value={lockDuration}
                        onChange={(event,value)=>setLockDuration(value as number)}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}        // Step should be 1 to move between consecutive values
                        marks={marks}          // Display marks for each step
                        min={1}
                        max={48}
                    />
            </FormControl>

        </Box>
    );
}