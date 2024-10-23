import { Button } from "@mui/material"

interface TransactionButtonProps {
    approved: boolean
    approveFunction?: () => void //hide approve button if undefined
    transactionText: string
    transactionFunction: () => void
    width: number
}

export default function TransactionButton({ approved,
    approveFunction,
    transactionText,
    transactionFunction,
    width }: TransactionButtonProps) {
    if (approved) {
        return <Button
            sx={{
                width: `${width}px`,
                marginLeft:'10px'  // Prevents the button from having a default min width
            }}
            fullWidth variant="contained" onClick={transactionFunction}>
            {transactionText}
        </Button>
    }
    else {
        if (!approveFunction)
            return <></>
        return <Button
            sx={{
                width: "100px"    // Prevents the button from having a default min width
            }}
            color="secondary" fullWidth variant="contained" onClick={approveFunction}>
            approve
        </Button>
    }

}