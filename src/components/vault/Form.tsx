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

import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import ConvexICO from "../../images/Convex.png"
import USDCICO from "../../images/USDC.png"

import { Tab, Tabs, Tooltip } from '@mui/material';
import { useState } from 'react';
import NumberTextField from '../Commmon/NumberTextField';
import TransactionButton from '../TransactionButton';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
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
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [usdc, setUsdc] = useState<string>("")
  const [approved, setApprove] = useState<boolean>(false)
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
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              component="p"
              variant="caption"
              sx={{ marginBottom: '0.25rem' }}
            >
              Yield source
            </Typography>

            <img
              src={ConvexICO}
              alt="USDC Logo"
              style={{ height: '20px' }}
            />
            <Typography
              component="p"
              variant="caption"
              sx={{ fontStyle: 'italic', marginBottom: '0.25rem' }}
            >
              Convex Finance
            </Typography>
          </Box>
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
            label="Withdraw"
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
            defaultValue={0}
            maxValue={1000}
            setValue={setUsdc}
            value={usdc.toString()}
          />

          <ForgotPassword open={open} handleClose={handleClose} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <TransactionButton
              approved={approved}
              approveFunction={approveFunction}
              transactionFunction={transactionFunction}
              transactionText="deposit"
              width={100}
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
            defaultValue={0}
            maxValue={1000}
            setValue={setUsdc}
            value={usdc.toString()}
          />

          <ForgotPassword open={open} handleClose={handleClose} />
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
