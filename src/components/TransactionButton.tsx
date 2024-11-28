import { Button } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
interface TransactionButtonProps {
    approved: boolean
    approveFunction?: () => void //hide approve button if undefined
    transactionText: string
    transactionFunction: () => void
    width: number
    disabled?:boolean
    spinning?: boolean
}

export default function TransactionButton({ approved,
    approveFunction,
    transactionText,
    transactionFunction,
    width, spinning,disabled }: TransactionButtonProps) {
    if (approved) {
        return spinning ? <CircularProgress /> : <Button disabled={disabled}
            sx={{
                width: `${width}px`,
                marginLeft: '10px'  // Prevents the button from having a default min width
            }}
            fullWidth variant="contained" onClick={transactionFunction}>
            {transactionText}
        </Button>
    }
    else {
        if (!approveFunction)
            return <></>
        return spinning ? <CircularProgress /> : <Button
            sx={{
                width: "100px"    // Prevents the button from having a default min width
            }}
            color="secondary" fullWidth variant="contained" onClick={approveFunction}>
            approve
        </Button>
    }

}