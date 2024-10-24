import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import TransactionButton from '../TransactionButton';

interface LockApprovalProps {
  open: boolean;
  handleClose: () => void;
  lockDuration: number
  lockAmount: string
  sFlaxPerDay: number
}



export default function LockAppovalDialogue({ open, handleClose, sFlaxPerDay, lockAmount, lockDuration }: LockApprovalProps) {
  const [isSpinning, setIsSpinning] = React.useState<boolean>(false)

  const transactionFunction = () => {
    setIsSpinning(true)
    setTimeout(() => {
      alert('Transaction confirmed')
      setIsSpinning(false)
      handleClose()
    }, 2500)
  }
  const lockAmount_num = parseFloat(lockAmount)
  return (
    <Dialog
      open={open && !isNaN(lockAmount_num)}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          handleClose();
        },
        sx: { backgroundImage: 'none' },
      }}
    >
      <DialogTitle>Review Lock Amount and Duration</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <DialogContentText sx={{ color: 'yellow' }}>
          You have selected to lock {lockAmount} Flax for {lockDuration} months, earning {sFlaxPerDay} sFlax per day. Please make sure these values are correct.
          Once Flax is locked, it cannot be unlocked until the duration is over.
        </DialogContentText>

      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Cancel</Button>
        <TransactionButton approved={true} transactionText='Confirm' transactionFunction={transactionFunction} width={120} spinning={isSpinning} />
      </DialogActions>
    </Dialog>
  );
}
