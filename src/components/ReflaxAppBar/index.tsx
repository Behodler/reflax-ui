import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FlaxICO from '../../images/FlaxBig.png'
import sFlaxICO from '../../images/sFlaxBig.png'
import USDC from '../../images/USDC.png'

import ImageBalanceHeader from './ImageBalanceHeader';

import { useBalancesContext } from '../../contexts/BalancesContextProvider';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function ReflaxAppBar() {
  const { flaxBalance, sFlaxBalance, usdcBalance, unclaimedSFlax } = useBalancesContext()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar sx={{ backgroundColor: '#212233' }}>
          {/* Left-aligned Box for Logo and Name */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>

            <ElectricBoltIcon sx={{ mr: 2 }} />

            <Typography variant="h6" component="div">
              ReFlax
            </Typography>
          </Box>

          {/* This Box will take up the remaining space */}
          <Box sx={{ flexGrow: 1 }} />
          {/* Right-aligned Box for items on the right */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ImageBalanceHeader name="Flax" balance={flaxBalance} image={FlaxICO} decimalPlaces={18} />
            <ImageBalanceHeader name="sFlax" balance={sFlaxBalance} image={sFlaxICO} unclaimed={unclaimedSFlax} decimalPlaces={18} />
            <ImageBalanceHeader name="USDC" balance={usdcBalance} image={USDC} decimalPlaces={6} />
            <ConnectButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>);
}
