import { FormControl, FormLabel, TextField, InputAdornment, Button } from '@mui/material';
import { useEffect, useState } from 'react';

interface NumberTextFieldProps {
    label: string
    id?: string,
    maxValue: number
    defaultValue: number
    value: string
    setValue: (v: string) => void
    tokenName:string
}

function errorMessage(value: number, maxValue: number, tokenName:string): string {
    if (isNaN(value))
        return "Invalid Number"
    if (value < 0)
        return "Non-negative numbers only"
    if (value > maxValue)
        return `Exceeds Maximum ${tokenName}`
    return ""
}

export default function NumberTextField({ label, id, maxValue, defaultValue, value, setValue, tokenName }: NumberTextFieldProps) {
    const [inputError, setInputError] = useState(false);
    const [inputErrorMessage, setInputErrorMessage] = useState('');
    id = id || label;
    // For the time being, there is no functionality for max, but you can add it later
    const handleMaxClick = () => {
        setValue(maxValue.toString())
    };
    useEffect(() => {
        const val_num = value.trim() === "" ? 0 : parseFloat(value.trim())
        const message = errorMessage(val_num, maxValue,tokenName)
        setInputError(message !== "")
        setInputErrorMessage(message)
    }, [value])

    return (
        <FormControl fullWidth>
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <TextField
                error={inputError}
                helperText={inputErrorMessage}
                id={id}
                type="number"
                name={`${tokenName}Amount`}
                placeholder={defaultValue.toFixed(2)}
                required
                value={value}
                onChange={(event => setValue(event.target.value))}
                fullWidth
                variant="outlined"
                color={inputError ? 'error' : 'primary'}
                inputProps={{ 'aria-label': 'USDC', min: 0, step: 'any' }}
                sx={{
                    // CSS to hide incrementer arrows
                    '& input[type=number]': {
                        '-moz-appearance': 'textfield',  // Firefox
                    },
                    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                        '-webkit-appearance': 'none',   // Chrome, Safari, Edge
                        margin: 0,
                    },
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button color="primary"
                                sx={{
                                    padding: '1px 8px', // Smaller padding
                                    fontSize: '0.6rem', // Smaller font size
                                    minWidth: 'auto',    // Allows the button to be smaller
                                    height: '20px',      // Reduced height
                                }}
                                onClick={handleMaxClick} variant="contained">
                                max
                            </Button>
                        </InputAdornment>
                    ),
                }}
            />
        </FormControl>
    );
}