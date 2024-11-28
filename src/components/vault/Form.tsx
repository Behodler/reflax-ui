import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import ConfirmDialog from './ConfirmDialog';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import ConvexICO from "../../images/Convex.png"
import USDCICO from "../../images/USDC.png"

import { Stack, Tab, Tabs, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import NumberTextField from '../Commmon/NumberTextField';
import TransactionButton from '../TransactionButton';
import { useVaultContext } from '../../contexts/VaultContextProvider';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  boxShadow:
    'rgba(0, 0, 33, 0.5) 0px 5px 15px 0px, rgba(32, 33, 41, 0.08) 0px 15px 35px -5px',

}));



function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


export default function Form() {
  const theme = useTheme();
  const { allowance } = useVaultContext()
  const isMediumOrLarger = useMediaQuery(theme.breakpoints.up('md')); // Check if screen is medium or larger

  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [usdc, setUsdc] = useState<string>("")

  const [approved, setApprove] = useState<boolean>(false)
  const [approveButtonDisabled, setApproveButtonDisabled] = useState<boolean>(true)
  
  useEffect(() => {
    if (allowance === undefined) {
      setApproveButtonDisabled(true)
    } else {
      setApproveButtonDisabled(false)
      const usdcNum = parseFloat(usdc)
      if (isNaN(usdcNum) && allowance > 0) {
        setApprove(true)
      } else {
        setApprove(usdcNum < allowance)
      }
    }

  }, [usdc, allowance])

  const approveFunction = () => {
    setTimeout(() => {
      setApprove(true)
      alert('approved')
    }, 1000)
  }

  const transactionFunction = () => {
    setTimeout(() => {
      setApprove(true)
      alert('transaction confirmed')
    }, 5000)
  }
  const handleTabChange = (event: any, newIndex: any) => {
    setTabIndex(newIndex);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

  };

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <Card variant="outlined">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            component="h4"
            variant="h4"

          >
            USDC
          </Typography>
          <img
            src={USDCICO}
            alt="USDC Logo"
            style={{ width: '25px', marginLeft: '10px' }}
          />
        </Box>
        <Tooltip title="USDe/USDx Convex Boosted Curve pool">
          <Stack direction="row" spacing={1} alignItems="center">
            {/* Left Column with Image */}
            <Box
              sx={{
                height: '50px', // Adjust height as needed
                display: 'flex',
                alignItems: 'center',
                // border: '1px solid red'
              }}
            >
              <img
                src={ConvexICO}
                alt="Convex Logo"
                style={{ height: '25px', display: 'block', marginTop: 0 }}
              />
            </Box>

            {/* Right Column */}
            <Stack spacing={0} sx={{ width: '100%' }}>
              {/* Top Right Cell */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // border: '1px solid red',
                  height: '20px' // Adjust height to match the overall layout
                }}
              >
                {isMediumOrLarger && <Typography
                  component="p"
                  variant="subtitle2"
                  sx={{ fontSize: '0.65rem', marginBottom: '0.25rem' }}
                >
                  Powered by
                </Typography>}
              </Box>

              {/* Bottom Right Cell */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // border: '1px solid red',
                  height: '20px' // Same height to ensure rows are equal
                }}
              >
                {isMediumOrLarger &&
                  <Typography
                    component="p"
                    variant="subtitle2"
                    sx={{ fontSize: '0.65rem', marginBottom: '0.25rem' }}
                  >
                    Convex finance
                  </Typography>}
              </Box>
            </Stack>
          </Stack>


        </Tooltip>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 2 }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          sx={{ width: '100%' }}
        >
          <Tab
            label="Deposit"
            id="tab-0"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          />
          <Tab
            label="Withdraw USDC / Claim Flax"
            id="tab-1"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          />
        </Tabs>
      </Box>

      <TabPanel value={tabIndex} index={0}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
        >
          <NumberTextField
            label="USDC"
            id="usdc-field"
            tokenName='usdc'
            defaultValue={0}
            maxValue={1000}
            setValue={setUsdc}
            value={usdc.toString()}
          />

          <ConfirmDialog open={open} handleClose={handleClose} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <TransactionButton
              approved={approved}
              approveFunction={approveFunction}
              transactionFunction={transactionFunction}
              transactionText="deposit"
              width={100}
              disabled={approveButtonDisabled}
            />
          </Box>
        </Box>
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
        >
          <NumberTextField
            label="USDC"
            id="usdc-field"
            tokenName='usdc'
            defaultValue={0}
            maxValue={1000}
            setValue={setUsdc}
            value={usdc.toString()}
          />

          <ConfirmDialog open={open} handleClose={handleClose} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <TransactionButton
              approved={approved}
              transactionFunction={transactionFunction}
              transactionText="claim"
              width={80}
            />
            <TransactionButton
              approved={approved}
              approveFunction={approveFunction}
              transactionFunction={transactionFunction}
              transactionText="claim + withdraw"
              width={150}
            />
          </Box>
        </Box>
      </TabPanel>
    </Card>
  );
}
