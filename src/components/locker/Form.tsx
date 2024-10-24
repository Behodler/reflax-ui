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

import LockAppovalDialogue from './LockApproval';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import FlaxToSCXICO from '../../images/FlaxTosFlax.png'
import USDCICO from "../../images/USDC.png"

import { Tab, Tabs, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import NumberTextField from '../Commmon/NumberTextField';
import TransactionButton from '../TransactionButton';
import DurationSlider from './DurationSlider';
import { Label } from '@mui/icons-material';

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
  const theme = useTheme();
  const isMediumOrLarger = useMediaQuery(theme.breakpoints.up('md')); // Check if screen is medium or larger
  const [lockDuration, setLockDuration] = useState<number>(3)
  const [emailError, setEmailError] = React.useState(false);


  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [openLockApproval, setOpenLockApproval] = useState(false);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [flaxToLock, setFlaxToLock] = useState<string>("")
  const [approved, setApprove] = useState<boolean>(false)
  const [sFlaxPerDay, setSFlaxPerDay] = useState<number>(0)

  useEffect(() => {
    const flaxToLock_num = parseFloat(flaxToLock)
    if (isNaN(flaxToLock_num)) {
      setSFlaxPerDay(0)
    }
    else {
      setSFlaxPerDay((flaxToLock_num / 1000) * lockDuration)
    }
  }, [lockDuration, flaxToLock])

  useEffect(() => {
    console.log('sFlax per day' + sFlaxPerDay)
  }, [sFlaxPerDay])
  const approveFunction = () => {
    setTimeout(() => {
      setApprove(true)
      alert('approved')
    }, 1000)
  }

  const transactionFunction = () => {
    setTimeout(() => {
      setOpenLockApproval(true)
    }, 1)
  }
  const handleTabChange = (event: any, newIndex: any) => {
    setTabIndex(newIndex);
  };

  const handleClickOpen = () => {
    setOpenLockApproval(true);
  };

  const handleClose = () => {
    setOpenLockApproval(false);
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
          <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'left' }}>
            <Typography
              component="h4"
              variant="h4"

            >
              Flax Locker
            </Typography>

            {isMediumOrLarger && <Typography

              variant="subtitle2">
              Lock <i>Flax</i>. Earn <i>sFlax</i>. Boost APY on Re<i>Flax</i>
            </Typography>}
          </Box>

        </Box>

        <Box sx={{ textAlign: 'right' }}>

          {isMediumOrLarger && <img
            src={FlaxToSCXICO}
            alt="FlaxTosFlax"
            style={{ height: '120px' }}
          />}

        </Box>

      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 2 }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          sx={{ width: '100%' }}
        >
          <Tab
            label="Lock"
            id="tab-0"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          />
          <Tab
            label="Claim sFlax / Unlock Flax"
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
            label="Flax"
            id="flax-field"
            defaultValue={0}
            maxValue={1000}
            setValue={setFlaxToLock}
            value={flaxToLock.toString()}
          />
          <DurationSlider
            lockDuration={lockDuration}
            setLockDuration={setLockDuration}
          />

          <Typography color='tertiary' variant="subtitle1">SFlax per day {sFlaxPerDay == 0 ? '-' : sFlaxPerDay.toFixed(2)}</Typography>

          <LockAppovalDialogue sFlaxPerDay={sFlaxPerDay} lockDuration={lockDuration} lockAmount={flaxToLock} open={openLockApproval} handleClose={handleClose} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <TransactionButton
              approved={approved}
              approveFunction={approveFunction}
              transactionFunction={transactionFunction}
              transactionText="lock"
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
            setValue={setFlaxToLock}
            value={flaxToLock.toString()}
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <TransactionButton
              approved={approved}
              transactionFunction={transactionFunction}
              transactionText="claim sFlax"
              width={120}
            />
            <TransactionButton
              approved={approved}
              approveFunction={approveFunction}
              transactionFunction={transactionFunction}
              transactionText="unlock Flax"
              width={130}
            />
          </Box>
        </Box>
      </TabPanel>
    </Card>
  );
}
